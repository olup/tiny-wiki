FROM frolvlad/alpine-glibc as origin
RUN apk add nodejs npm
RUN npm i -g yarn


FROM origin as front
WORKDIR /app
COPY ./app/package.json .
RUN yarn install
COPY ./app/ .
ENV REACT_APP_API_URL=/graphql
RUN yarn build
RUN mkdir -p db

FROM origin as build
RUN npm install prisma2 -g --unsafe-perm
RUN apk add nginx tini

WORKDIR /app
COPY --from=front /app/build .

WORKDIR /api
COPY ./api .
RUN yarn install
RUN yarn build; exit 0

# RUN rm -rf node_modules
# RUN yarn install --production=true

ENV JWT_SECRET=secret
ENV GOOGLE_CLIENT_ID=255479022233-gcgpkkk2sriblm0fppmp4rg7ud6favie.apps.googleusercontent.com

RUN prisma2 -v
RUN prisma2 lift up

COPY ./entrypoint.sh /entrypoint.sh
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /run/nginx

ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["node", "/api/dist/index.js"]

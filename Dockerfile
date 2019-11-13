FROM frolvlad/alpine-glibc as origin
RUN apk add nodejs npm
RUN npm i -g yarn


FROM origin as front
WORKDIR /app
COPY ./app/package.json .
RUN yarn config set network-timeout 600000
RUN yarn install
COPY ./app/ .
ENV REACT_APP_API_URL=/graphql
RUN yarn build

FROM origin as build
RUN npm install prisma2 -g --unsafe-perm
RUN prisma2 -v
RUN apk add nginx tini

WORKDIR /app
COPY --from=front /app/build .

WORKDIR /api
COPY ./api .
RUN yarn install
RUN yarn build

ENV JWT_SECRET=sdfgSDFG89DSG3qsd43
ENV GOOGLE_CLIENT_ID=255479022233-gcgpkkk2sriblm0fppmp4rg7ud6favie.apps.googleusercontent.com

RUN prisma2 -v

COPY ./entrypoint.sh /entrypoint.sh
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /run/nginx

ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["node", "/api/dist/index.js"]

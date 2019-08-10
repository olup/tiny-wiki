import createStupidStore from "./stupid";

type Store = {
  user: object;
  roles: string[];
};

const store = createStupidStore<Store>({
  user: {},
  roles: []
});

export const useSimpleStore = store.useStore;

import { createContextStore, action, Action } from "easy-peasy";
import { loadPage_findOnePage } from "Pages/__generated__/loadPage";

interface PageStateModel {
  page: Partial<loadPage_findOnePage> | null;
  isNew: boolean;

  updatePage: Action<PageStateModel, Partial<loadPage_findOnePage>>;
  setIsNew: Action<PageStateModel, boolean>;
}
export const PageState = createContextStore<PageStateModel>({
  page: null,
  isNew: true,

  updatePage: action((state, payload) => {
    state.page = { ...state.page, ...payload };
  }),
  setIsNew: action((state, payload) => {
    state.isNew = payload;
  })
});

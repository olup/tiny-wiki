import { createContextStore, action, Action } from "easy-peasy";
import { loadPage_page } from "./__generated__/loadPage";

interface PageStateModel {
  page: Partial<loadPage_page> | null;
  isNew: boolean;
  loading: boolean;

  updatePage: Action<PageStateModel, Partial<loadPage_page>>;
  setIsNew: Action<PageStateModel, boolean>;
  setLoading: Action<PageStateModel, boolean>;
}
export const PageState = createContextStore<PageStateModel>({
  page: null,
  isNew: true,
  loading: false,

  updatePage: action((state, payload) => {
    state.page = { ...state.page, ...payload };
  }),
  setIsNew: action((state, payload) => {
    state.isNew = payload;
  }),
  setLoading: action((state, payload) => {
    state.loading = payload;
  })
});

import { StoreState } from '../../types';

const getPage = (state: StoreState) => {
  return state.app.page;
};

export {
  getPage,
};
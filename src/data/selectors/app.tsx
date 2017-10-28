import { StoreState } from '../../types';

const getPage = (state: StoreState) => {
  return state.page;
};

export {
  getPage,
};
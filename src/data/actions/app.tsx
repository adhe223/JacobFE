import { Pages } from '../../constants';

export interface SetPage {
  type: 'SET_PAGE';
  payload: {
    page: Pages;
  };
}

export type PageAction = SetPage;

export function setPage(page: Pages): SetPage {
  return {
    type: 'SET_PAGE',
    payload: {
      page,
    },
  };
}
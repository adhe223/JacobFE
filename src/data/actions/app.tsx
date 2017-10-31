import { Page } from '../../constants';

export interface SetPage {
  type: 'SET_PAGE';
  payload: {
    page: Page;
  };
}

export type PageAction = SetPage;

export function setPage(page: Page): SetPage {
  return {
    type: 'SET_PAGE',
    payload: {
      page,
    },
  };
}
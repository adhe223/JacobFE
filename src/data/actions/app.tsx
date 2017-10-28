export interface SetPage {
  type: 'SET_PAGE';
  payload: {
    page: string;
  };
}

export type PageAction = SetPage;

export function setPage(page: string): SetPage {
  return {
    type: 'SET_PAGE',
    payload: {
      page,
    },
  };
}
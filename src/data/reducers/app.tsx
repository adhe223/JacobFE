import { PageAction } from '../actions/app';
import { Page } from '../../constants';

export interface AppState {
  page: Page;
}

const initialState = {
  page: Page.customers,
};

export function app(state: AppState = initialState, action: PageAction): AppState {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload.page,
      };
    default:
      return state;
  }
}
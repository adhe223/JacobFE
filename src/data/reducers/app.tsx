import { PageAction } from '../actions/app';
import { Pages } from '../../constants';

export interface AppState {
  page: Pages;
}

const initialState = {
  page: Pages.customers,
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

import { PageAction } from '../actions/app';

export interface AppState {
  page: string;
}

const initialState = {
  page: 'customer'
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
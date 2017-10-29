import Sample from '../../models/Sample';
import { FETCHING_SAMPLES, FETCHED_SAMPLES } from '../../constants';

export interface SampleState {
  listItems: Sample[];
  isFetching: boolean;
}
const initialState = {
  listItems: [],
  isFetching: false
};

export function samples(
  state: SampleState = initialState,
  action: {
    type: string;
    payload: {
      samples: Sample[];
    };
  }
): SampleState {
  switch (action.type) {
    case FETCHING_SAMPLES:
      return {
        ...state,
        isFetching: true
      };
    case FETCHED_SAMPLES:
      return {
        listItems: action.payload.samples,
        isFetching: false
      };
    default:
      return state;
  }
}

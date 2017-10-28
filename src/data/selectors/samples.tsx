import { StoreState } from '../../types';

const getSamples = (state: StoreState) => {
    return state.samples.listItems;
};

const samplesFetching = (state: StoreState) => {
    return state.samples.isFetching;
};

export {
  getSamples,
  samplesFetching,
};
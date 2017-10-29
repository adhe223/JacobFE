import Sample from '../../models/Sample';
import { FETCHING_SAMPLES, FETCHED_SAMPLES } from '../../constants';
import { Dispatch } from 'react-redux';
import { baseApiUrl } from '../../constants';

export interface FetchingSamples {
  type: FETCHING_SAMPLES;
}

export interface FetchedSamples {
  type: FETCHED_SAMPLES;
  payload: {
    samples: Sample[],
  };
}

export type SampleAction = FetchingSamples | FetchedSamples;

export function fetchingSamples(): FetchingSamples {
  return {
    type: FETCHING_SAMPLES
  };
}

export function fetchedSamples(samples: Sample[]) {
  return {
    type: FETCHED_SAMPLES,
    payload: {
      samples
    },
  };
}

export function fetchSamples() {
  return (dispatch: Dispatch<SampleAction>): void => {
    dispatch(fetchingSamples());

    const url = baseApiUrl + 'samples';
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch samples');
        }
        return response.json();
      })
      .then((samples) => dispatch(fetchedSamples(samples)))
      .catch((err) => {
        console.log('Error fetching samples: ' + err.message);
      });
  };
}

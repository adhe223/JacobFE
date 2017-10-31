export const FETCHING_CUSTOMERS = 'FETCHING_CUSTOMERS';
export type FETCHING_CUSTOMERS = typeof FETCHING_CUSTOMERS;

export const FETCHED_CUSTOMERS = 'FETCHED_CUSTOMERS';
export type FETCHED_CUSTOMERS = typeof FETCHED_CUSTOMERS;

export const FETCHING_ORDERS = 'FETCHING_ORDERS';
export type FETCHING_ORDERS = typeof FETCHING_ORDERS;

export const FETCHED_ORDERS = 'FETCHED_ORDERS';
export type FETCHED_ORDERS = typeof FETCHED_ORDERS;

export const FETCHING_SAMPLES = 'FETCHING_SAMPLES';
export type FETCHING_SAMPLES = typeof FETCHING_SAMPLES;

export const FETCHED_SAMPLES = 'FETCHED_SAMPLES';
export type FETCHED_SAMPLES = typeof FETCHED_SAMPLES;

export enum Page {
  home,
  customers,
  orders,
  samples,
}

export const baseApiUrl: string = 'http://192.168.29.224:3000/';
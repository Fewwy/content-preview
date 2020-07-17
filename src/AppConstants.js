/* eslint-disable max-len */
export const CONTENT_FETCH = 'CONTENT_FETCH';
export const CONTENT_HITS_FETCH = 'CONTENT_HITS_FETCH';
export const CONTENT_DETAILS_FETCH = 'CONTENT_DETAILS_FETCH';
export const CONTENT_DETAILS_HITS_FETCH = 'CONTENT_DETAILS_HITS_FETCH';
export const PY_DATA_FETCH = 'PY_DATA_FETCH';
export const URL_SET = 'URL_SET';

const baseParams = (base) => `:8090/${base}/`;
export const PRODUCTION_URL = 'https://10.72.32.104';
export const LOCALHOST = 'localhost:8080';
export let BASE_URL = PRODUCTION_URL;

export let CONTENT_FETCH_URL = `${BASE_URL}${baseParams('content')}?metadata_only=True`;
export let CONTENT_HITS_FETCH_URL = `${BASE_URL}${baseParams('hits')}`;
export let CONTENT_DETAILS_FETCH_URL = `${BASE_URL}${baseParams('content')}`;
export let CONTENT_DETAILS_HITS_FETCH_URL = `${BASE_URL}${baseParams('hits')}detail/`;
export let PY_DATA_FETCH_URL = `${BASE_URL}${baseParams('params')}`;

export const setBaseUrlConstant = (url) => {
    BASE_URL = url;
    CONTENT_FETCH_URL = `${BASE_URL}${baseParams('content')}?metadata_only=True`;
    CONTENT_HITS_FETCH_URL = `${BASE_URL}${baseParams('hits')}`;
    CONTENT_DETAILS_FETCH_URL = `${BASE_URL}${baseParams('content')}`;
    CONTENT_DETAILS_HITS_FETCH_URL = `${BASE_URL}${baseParams('hits')}detail/`;
    PY_DATA_FETCH_URL = `${BASE_URL}${baseParams('params')}`;
};

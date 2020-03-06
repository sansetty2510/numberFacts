import {
  SIMPLE_ACTION,
  GET_FACT_DATA,
  GET_FACT_DATA_SUCCESS,
  GET_FACT_DATA_FAIL
} from './constant';

export const simpleAction = () => ({
  type: SIMPLE_ACTION,
  payload: 'data from store'
});

export const getFacts = factType => ({
  type: GET_FACT_DATA,
  payload: {
    factType
  }
});


export const getFactsSuccess = factsData => ({
  type: GET_FACT_DATA_SUCCESS,
  payload: {
    factsData
  }
});
export const getFactsFail = () => ({
  type: GET_FACT_DATA_FAIL,
});

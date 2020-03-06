import {
  SIMPLE_ACTION,
  GET_FACT_DATA,
  GET_FACT_DATA_SUCCESS,
  GET_FACT_DATA_FAIL
} from './constant';

const initialState = {
  factsData: { text: 'Try available options', isValidData: false },
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return {
        homeData: action.payload
      };
    case GET_FACT_DATA:
      return {
        ...state,
        factsData: undefined,
        isLoading: true
      };
    case GET_FACT_DATA_SUCCESS:
      return {
        ...state,
        factsData: action.payload.factsData,
        isLoading: false
      };
    case GET_FACT_DATA_FAIL:
      return {
        ...state,
        factsData: 'Sorry!!!! Fail load data, please try again',
        isLoading: false
      };
    default:
      return state;
  }
};

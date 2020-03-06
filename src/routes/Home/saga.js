import {
  put, takeLatest
} from 'redux-saga/effects';
import { GET_FACT_DATA, FAIL_DATA_LOAD_TEXT }
  from './constant';
import {
  getFactsSuccess, getFactsFail
} from './action';
import getData from '../../api/request';
import { getNumberApiUrl } from '../../api/selector';

function* getCharacter({ payload }) {
  try {
    const data = yield getData(getNumberApiUrl(payload.factType));
    yield put(getFactsSuccess({ ...data, isValidData: true }));
  } catch (e) {
    yield put(getFactsFail({ text: FAIL_DATA_LOAD_TEXT, isValidData: false }));
  }
}

function* homeSaga() {
  yield takeLatest(GET_FACT_DATA, getCharacter);
}

export default homeSaga;

import { all } from 'redux-saga/effects';
import homeSaga from '../routes/Home/saga';

export default function* rootSaga() {
  yield all([
    homeSaga(),
  ]);
}

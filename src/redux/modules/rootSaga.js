import { all } from 'redux-saga/effects';
import {sagas as ShoppingSagas} from './shopping';

export default function* rootSaga() {
  yield all([
    ShoppingSagas(),
  ]);
}
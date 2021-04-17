import { put, takeEvery, call } from "@redux-saga/core/effects";
import { createActions, handleActions } from "redux-actions";
import ShoppingService from '../../service/ShoppingService';

const initialState = {
  list: [],
  feature: [],
  loading: false,
  error: null,
  countCart: 0,
}

export const { successList, successFeature, countingCart, pending, fail } = createActions(
  {
    SUCCESS_LIST: (list) => ({list}),
    SUCCESS_FEATURE: (feature) => ({feature}),
    COUNTING_CART: (length) => ({length}),
  },
  'PENDING',
  'FAIL',
);

const reducer = handleActions(
  {
    SUCCESS_LIST: (state, action) => ({
      ...state,
      loading: false,
      list: state.list.concat(action.payload.list),
    }),
    SUCCESS_FEATURE: (state, action) => ({
      ...state,
      feature: action.payload.feature,
    }),
    COUNTING_CART: (state, action) => ({
      ...state,
      countCart: action.payload.length
    }),
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    FAIL: (state) => ({
      ...state,
      loading: false,
      error: true,
    })
  },
  initialState,
);

export default reducer;

export const {getList, getFeature} = createActions(
  {
    GET_LIST: (pageNumber) => ({pageNumber})
  },
  "GET_FEATURE",
)

export function* sagas() {
  yield takeEvery(getList, getListSaga);
  yield takeEvery(getFeature, getFeatureSaga);
}

function* getListSaga (action) {
  try {
    yield put(pending());
    const list = yield call(ShoppingService.getList, action.payload.pageNumber);
    yield put(successList(list));
  } catch(e) {
    yield put(fail());
  }
}

function* getFeatureSaga () {
  try {
    const feature = yield call(ShoppingService.getFeature);
    yield put(successFeature(feature));
  } catch(e) {
    yield put(fail());
  }
}



import {all, fork} from '@redux-saga/core/effects';

import searchSaga from './search/saga';
import compareSaga from './compare/saga';
import authSaga from './auth/saga';

export default function* rootSaga() {
    yield all([
        fork(searchSaga),
        fork(compareSaga),
        fork(authSaga),
    ]);
}
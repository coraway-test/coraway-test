import {all, fork} from '@redux-saga/core/effects';

import searchSaga from './search/saga';
import compareSaga from './compare/saga';
import login from './auth/saga';
import detailSaga from './detailPage/saga';

export default function* rootSaga() {
    yield all([
        fork(searchSaga),
        fork(compareSaga),
        fork(login),
        fork(detailSaga),
    ]);
}

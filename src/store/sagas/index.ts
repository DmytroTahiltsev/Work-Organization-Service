import { all } from 'redux-saga/effects';
import authSagaWatcher from './auth';
import eventsSagaWatcher from './events';

function* rootSaga(): Generator {
    yield all([
      authSagaWatcher(),
      eventsSagaWatcher()
    ]);
  }
  
  export default rootSaga;
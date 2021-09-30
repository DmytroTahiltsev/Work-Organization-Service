import { all } from 'redux-saga/effects';
import authSagaWatcher from './auth';
import eventsSagaWatcher from './events';
import todosSagaWatcher from './todos';

function* rootSaga(): Generator {
    yield all([
      authSagaWatcher(),
      eventsSagaWatcher(),
      todosSagaWatcher()
    ]);
  }
  
  export default rootSaga;
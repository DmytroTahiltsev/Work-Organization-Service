import { configureStore } from '@reduxjs/toolkit'
import {authReducer, eventsReducer} from './slices'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    auth: authReducer,
    event: eventsReducer
  },
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
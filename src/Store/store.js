import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../Reducers/rootReducer';
import createSagaMiddleware from "redux-saga";
import rootSaga from '../Sagas/rootSaga';

const sagaMiddleWare = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare)
})

sagaMiddleWare.run(rootSaga);
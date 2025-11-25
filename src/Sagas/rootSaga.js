import {all} from 'redux-saga/effects'
import { watcherTaskSaga } from './taskSaga'

export default function* rootSaga(){
  console.log("============inside root saga====")
  yield all(
    [
      watcherTaskSaga(),
    ]
  )
}
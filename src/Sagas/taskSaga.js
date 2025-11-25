import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_TASK, ADD_TASK_TO_THE_STORE, DELETE_DOING_TASK, DELETE_DOING_TASK_FROM_THE_STORE, DELETE_DONE_TASK, DELETE_DONE_TASK_FROM_THE_STORE, DELETE_TODO_TASK, DELETE_TODO_TASK_FROM_THE_STORE, LOAD_DONE_TASKS_TO_THE_STORE, LOAD_IN_PROGRESS_TASKS_TO_THE_STORE, LOAD_STORE_DATA_FROM_BACKEND, LOAD_TODO_TASKS_TO_THE_STORE, MOVE_INPROGRESS_TO_DONE, MOVE_TODO_TO_IN_PROGRESS, UPDATE_DONE_PROGRESS_TASKS_IN_THE_STORE, UPDATE_INPROGRESS_TASKS_IN_THE_STORE, UPDATE_TODO_TASKS_IN_THE_STORE } from "../Actions/actionsConstants";
import axios from "axios";



export function* loadStoreDataFromBackend() {
  try {
    let todoTaskApiUrl = "http://localhost:3001/todoTasks";
    let inProgressTaskUrl = "http://localhost:3001/inProgressTasks";
    let doneTaskUrl = "http://localhost:3001/doneTasks";

    let todoTasksApiResponse = yield call(axios.get, todoTaskApiUrl);
    let inProgressTasksApiResponse = yield call(axios.get, inProgressTaskUrl);
    let doneTaskUrlApiResponse = yield call(axios.get, doneTaskUrl);

    if(todoTasksApiResponse && todoTasksApiResponse.status === 200 && todoTasksApiResponse.data){
      yield put({type:LOAD_TODO_TASKS_TO_THE_STORE,payload:todoTasksApiResponse.data})
    }

    if(inProgressTasksApiResponse && inProgressTasksApiResponse.status === 200 && inProgressTasksApiResponse.data){
      yield put({type:LOAD_IN_PROGRESS_TASKS_TO_THE_STORE,payload:inProgressTasksApiResponse.data});
    }

    if(doneTaskUrlApiResponse && doneTaskUrlApiResponse.status === 200 && doneTaskUrlApiResponse.data){
      yield put({type:LOAD_DONE_TASKS_TO_THE_STORE,payload:doneTaskUrlApiResponse.data});
    }

  } catch (error) {
    console.log("=====================SOME ERROR UPDATING THE DATA TO THE STORE =====================");
  }
}

export function* deleteTodoTask(action){
  try {
    let apiUrl = `http://localhost:3001/todoTasks/${action.payload}`
    const apiResponse = yield call(axios.delete,apiUrl);
    if(apiResponse && apiResponse.status === 200 && apiResponse.data){
      yield put({type:DELETE_TODO_TASK_FROM_THE_STORE,payload:apiResponse.data})
    }
  } catch (error) {
    console.log("=========================SOME ERROR DELETING THE TODO TASK===================");
  }
}

export function* moveTodoToInProgress(action) {
  try {
    let todoTaskapiURL = `http://localhost:3001/todoTasks/${action.payload}`;
    let inProgressApiURL = `http://localhost:3001/inProgressTasks`;
    let apiResponse = yield call(axios.delete, todoTaskapiURL);
    if (apiResponse && apiResponse.status === 200 && apiResponse.data) {
      yield put({
        type: DELETE_TODO_TASK_FROM_THE_STORE,
        payload: apiResponse.data,
      });

      let inProgressData = yield call(
        axios.post,
        inProgressApiURL,
        apiResponse.data
      );

      if (inProgressData) {
        yield put({
          type: UPDATE_INPROGRESS_TASKS_IN_THE_STORE,
          payload: inProgressData.data,
        });
      }
    }
  } catch (error) {}
}

export function* deleteDoingTask(action){
  try {
  let apiUrl = `http://localhost:3001/inProgressTasks/${action.payload}`
  let apiResponse = yield call(axios.delete,apiUrl);
  if(apiResponse && apiResponse.status === 200 && apiResponse.data){
    yield put({type:DELETE_DOING_TASK_FROM_THE_STORE,payload:apiResponse.data})
  } 
  } catch (error) {
    console.log("==============error============",error);
  }
  
}

export function* deleteDoneTask(action) {
  try {
    let apiURL = `http://localhost:3001/doneTasks/${action.payload}`;
    let apiResponse = yield call(axios.delete, apiURL);
    if (apiResponse && apiResponse.status === 200 && apiResponse.data) {
      yield put({
        type: DELETE_DONE_TASK_FROM_THE_STORE,
        payload: apiResponse.data,
      });
    }
  } catch (error) {}
}

export function* moveInProgressToDone(action){
  // delete that task from the inprogress list
  // add the same task to the done list
  try {
    let apiUrl = `http://localhost:3001/inProgressTasks/${action.payload.id}`
    let apiResponse = yield call(axios.delete,apiUrl);
    if(apiResponse && apiResponse.status === 200 && apiResponse.data){
      yield put({type:DELETE_DOING_TASK_FROM_THE_STORE,payload:apiResponse.data})
      let apiUrlForPost = `http://localhost:3001/doneTasks`;
      let apiResponseForPost = yield call(axios.post,apiUrlForPost,apiResponse.data);
      console.log("==============apiResponseForPost=======",apiResponseForPost);
      if(apiResponseForPost && apiResponseForPost.status === 201 && apiResponseForPost.data){
        yield put({type:UPDATE_DONE_PROGRESS_TASKS_IN_THE_STORE,payload:apiResponseForPost.data})
      }
    }
  } catch (error) {
    
  }
}

export function* addTask(action){
  try {
    let apiUrl = `http://localhost:3001/todoTasks`;
    let apiResponse = yield call(axios.post,apiUrl,action.payload);
    if(apiResponse && apiResponse.status === 201 && apiResponse.data){
      yield put({type:ADD_TASK_TO_THE_STORE,payload:apiResponse.data})
    }
  } catch (error) {
    
  }
}


export function* watcherTaskSaga(){
  yield takeLatest(LOAD_STORE_DATA_FROM_BACKEND,loadStoreDataFromBackend);
  yield takeLatest(DELETE_TODO_TASK,deleteTodoTask);
  yield takeLatest(MOVE_TODO_TO_IN_PROGRESS,moveTodoToInProgress);
  yield takeLatest(DELETE_DOING_TASK,deleteDoingTask);
  yield takeLatest(DELETE_DONE_TASK,deleteDoneTask);
  yield takeLatest(MOVE_INPROGRESS_TO_DONE,moveInProgressToDone);
  yield takeLatest(ADD_TASK,addTask);

}
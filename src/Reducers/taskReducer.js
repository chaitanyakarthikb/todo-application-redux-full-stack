import { ADD_TASK_TO_THE_STORE, DELETE_DOING_TASK_FROM_THE_STORE, DELETE_DONE_TASK_FROM_THE_STORE, DELETE_TODO_TASK_FROM_THE_STORE, LOAD_DONE_TASKS_TO_THE_STORE, LOAD_IN_PROGRESS_TASKS_TO_THE_STORE, LOAD_TODO_TASKS_TO_THE_STORE, UPDATE_DONE_PROGRESS_TASKS_IN_THE_STORE, UPDATE_INPROGRESS_TASKS_IN_THE_STORE } from "../Actions/actionsConstants"

const initialState = {
  todoTasks:[],
  doingTasks:[],
  doneTasks:[],
}

export const taskReducer = (state=initialState,action)=>{
  switch (action.type){
    case LOAD_TODO_TASKS_TO_THE_STORE:
      return {
        ...state,
        todoTasks:action.payload,
      }
    case LOAD_DONE_TASKS_TO_THE_STORE:
      return{
        ...state,
        doneTasks:action.payload,
      }
    case LOAD_IN_PROGRESS_TASKS_TO_THE_STORE:
      return{
        ...state,
        doingTasks:action.payload,
      }
    case DELETE_TODO_TASK_FROM_THE_STORE:
      let temp = state.todoTasks.filter((task)=>task.id!==action.payload.id);
      return{
        ...state,
        todoTasks:[...temp],
      }
    case UPDATE_INPROGRESS_TASKS_IN_THE_STORE:
      return{
        ...state,
        doingTasks:[...state.doingTasks,action.payload]
      }
    case DELETE_DOING_TASK_FROM_THE_STORE:
      let updatedTasks = state.doingTasks.filter((task)=>task.id!==action.payload.id);
      return {
        ...state,
        doingTasks:[...updatedTasks],
      }
    case DELETE_DONE_TASK_FROM_THE_STORE:
      let newTasks = state.doneTasks.filter((task)=>task.id!==action.payload.id);
      return{
        ...state,
        doneTasks:[...newTasks],
      }
    case UPDATE_DONE_PROGRESS_TASKS_IN_THE_STORE:
      return{
        ...state,
        doneTasks:[...state.doneTasks,action.payload],
      }
    case ADD_TASK_TO_THE_STORE:
      return{
        ...state,
        todoTasks:[...state.todoTasks,action.payload],
      }
    
    default:
      return state;
  }

}
import { useEffect } from 'react';
import './App.css';
import DisplayTasks from './Components/DisplayTasks/DisplayTasks';
import InputBlock from './Components/InputBlock/InputBlock';
import { useDispatch } from 'react-redux';
import { LOAD_STORE_DATA_FROM_BACKEND } from './Actions/actionsConstants';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type:LOAD_STORE_DATA_FROM_BACKEND});
  })
  return (
    <div className='container'>
      <InputBlock/>
      <hr></hr>
      <DisplayTasks/>
    </div>
  );
}

export default App;

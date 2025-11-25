import './App.css';
import DisplayTasks from './Components/DisplayTasks/DisplayTasks';
import InputBlock from './Components/InputBlock/InputBlock';

function App() {
  return (
    <div className='container'>
      <InputBlock/>
      <hr></hr>
      <DisplayTasks/>
    </div>
  );
}

export default App;

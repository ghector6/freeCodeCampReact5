import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Task from './components/Task';

function App() {
  return (
    <div className="task-app">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
        className="freecodecamp-logo"
        alt=""
        />
      </div>
      <div className="principal-task-list">
        <h1>My tasks</h1>
        <Task text='Learn React'/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

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
      </div>
    </div>
  );
}

export default App;

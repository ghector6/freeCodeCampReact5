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
    </div>
  );
}

export default App;

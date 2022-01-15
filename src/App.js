import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        Docker
        <h4>{process.env.REACT_APP_NAME}</h4>
        <h5>Hello</h5>
        test
      </header>
    </div>
  );
}

export default App;

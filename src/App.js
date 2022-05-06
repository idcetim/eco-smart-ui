import logo from './logo.svg';
import './App.css';

function App() {
  const clickButtonHandler = async  () => {
    const url = 'https://server-cetim.herokuapp.com/data/'
    const data = await fetch(url)
    const res = await data.json()
    console.log(res)
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={clickButtonHandler}>Pulsame guapo</button>
      </header>
    </div>
  );
}

export default App;

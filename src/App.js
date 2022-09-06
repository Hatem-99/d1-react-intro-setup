import logo from './logo.svg';
import './App.css';
import FunctionComponent from './components/FunctionComponent'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
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
      </header>
      <FunctionComponent type="email" value="enter your email please"/>
      <ButtonComponent name="Homework"/>
    <ImageComponent user={{img:"https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",alt:"art"}} />
    </div>

  );
}

export default App;

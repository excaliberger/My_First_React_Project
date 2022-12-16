import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React is so cool!
        </p>
        <h1>This is a test title</h1>
        <p>body... it has a template key word doesnt it? Oh! hang on! Body tag. 
           Oh ok! default template gets a keyword. Which means i get to feed my template keyword to my guy.</p>
        <h3>List of shows I like</h3>
        <ul>
          <li>Kid Cosmic</li>
          <li>M*A*S*H</li>
          <li>Inside Job</li>
          <li>The Untamed</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

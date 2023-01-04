import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor (props) {
    super (props);
    
    this.state = {
      list: ["ready","set","GO"],
      text: "",
    };

    this.onSubmit = this.onSubmit.bind(this)
  
  }

  onSubmit(click) {
    click.preventDefault();
    console.log("hello");
    console.log(this.state.text);
    let newList = [...this.state.list, this.state.text];
    this.setState({ list: newList, text: "" });
  }


  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <form>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.text}
            onChange={(event) => this.setState({text: event.target.value})}>
          </input>
          <button type="submit">Add</button>
        </form>
        <ul>
          { this.state.list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }

}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           React is so cool!
//         </p>
//         <h1>This is a test title</h1>
//         <p>body... it has a template key word doesnt it? Oh! hang on! Body tag. 
//            Oh ok! default template gets a keyword. Which means i get to feed my template keyword to my guy.</p>
//         <h3>List of shows I like</h3>
//         <ul>
//           <li>Kid Cosmic</li>
//           <li>M*A*S*H</li>
//           <li>Inside Job</li>
//           <li>The Untamed</li>
//         </ul>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

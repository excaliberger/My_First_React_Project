import React from 'react';
import FilmsList from "./films.page";


function HomePage(props) {

  let [list, setList] = React.useState(["ready","set","GO!"])
  let [text, setText] = React.useState([""])

  function onSubmit(event) {
    event.preventDefault();
    console.log("hello");
    console.log(text);
    let newList = [...list, text];
    setList(newList);
  }


  return (
    <div>
      <h1>Hello World!</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}>
        </input>
        <button type="submit">Add</button>
      </form>
      <ul>
        { list.map((item, idx) => {
          return <li key={item + idx}>{item}</li>;
        })}
      </ul>
      <FilmsList />
    </div>
  );

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

export default HomePage;

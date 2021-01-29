/*import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
*/
import React from "react"
import Contact from './contact'
import jokesData from "./data"





function App() {
  const ContactData=  jokesData.map(data=> <Contact name={data.name} phone={data.phone} />)
  return (
    
     <div>   
       {ContactData}
    </div>
)
}

export default App
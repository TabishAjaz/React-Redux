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
import {decrement, increment, log} from './actions'
import {useSelector,useDispatch} from 'react-redux'
import isLoggedReducer from "./reducers/isLogged"

//import Joke from "./components/joke"
 function App(){
   const val=isLoggedReducer?"signIn":"sign Out"
   const counter=useSelector(state => state.counter)
   const dispatch=useDispatch();
   return(
     <div>
       <h1>Counter={counter}</h1>

       <button onClick={()=> dispatch(increment())}>+</button>
       <button onClick={()=> dispatch(decrement())}>-</button> <br/>
       <button onClick={()=>dispatch(log())}> {val}</button>
     </div>
   )
 }
export default App
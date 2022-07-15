import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './test.css'
//hooks can only be used inside function components 
//class components have another way to do a similar action

function App(props) {
    //use state always returns an array with 2 values
    //first one is a variable representing current state
    //second one is a function that changes the current state 
    
    function constructor() {
      console.log("this is called once at init of component")
      return {count: 4, theme: "carnival"}
    }

    const [state, setState] = useState({theme: "carnival", count: 4})
    const count = state.count
    const theme = state.theme

    function decrementCount() {
      //must use function version of setting state when using previous values 
      setState(prevState => {
        return {...prevState, count: prevState.count - 1} //we need spread operator to keep track of prev state
      }) //updating state re-renders component
      //setCount((prevCount => prevCount - 1))
    }

    function incrementCount(){  
      setState(prevState => {
        return {
          count: prevState.count + 1, theme: "dance"
        }
      })
      //setCount(prevCount => prevCount + 1)
    }

    return (
        <>
          <div className='button_container'>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
          </div>
        </>
    )
    
}

function Welcome(){
    return (
        <h1>Hello, Tim</h1>
    )
}

const element = <App/>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
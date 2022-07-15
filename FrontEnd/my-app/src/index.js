import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './test.css'
//hooks can only be used inside function components 
//class components have another way to do a similar action

//function App(props) {

//   const [resourceType, setResourceType] = useState('posts')
//   const [items, setItems] = useState([])//empty array by deffault

// console.log("render")
//   //do some form of side effect when something changes
//   useEffect(() => { //executes every single time app renders
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//   .then(response => response.json())
//   .then(json => setItems(json))
//   }, [resourceType]) //second parameter of array with values, useEffect will run if anything in array changes

//   return(
//     <>
//     <div>
//       <button onClick={() => setResourceType(()=> 'posts')}>Posts</button>
//       <button onClick={() => setResourceType('users')}>Users</button>
//       <button onClick={() => setResourceType('comments')}>Comments</button>
//     </div>
//     <h1>{resourceType}</h1>
//     {items.map(item => {
//       return <pre>{JSON.stringify(item)}</pre>
//     })}
//     </>
//   )

// const [windowWidth, setWindowWidth] = useState(window.innerWidth)

// const handleResize = () => {
//   setWindowWidth(window.innerWidth)
// }

// useEffect(() => {
//   window.addEventListener('resize', handleResize)

//   return () => {
//     console.log("return from resource change")
//     window.removeEventListener('resize',handleResize)
//   }
// }, [])


// return (
//   <div>{windowWidth}</div>
// )
// }

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: 'Tim',
  lastName: 'Yuen'
}

function greeting(user) {
  if (user.firstName){
  return (
    <h1>Hello, {formatName(user)}!</h1>
  )
  }
  else {
    return (<p>Hello, Stranger {user}!<span>Welcome </span></p>)
  }
}
const t = "tim";


//function component of Test takes in props: children or jsx attributes
function Test(props) { 

  //testing if I can access the final string with dot notation
  const array = props.children.props.children.props.children;
  console.log(array);
  //returns array 
  return array
  
}
const element1 = <Test><div>{greeting(t)}</div></Test>; //the children of Test,<div>, are passed as props

function Welcome(props){
  return <h1>Hello props.name, {props.name}</h1>
}

const nameArray = ["Tim","Sam", "Mel", "Susan"];


function Repeat(props) {
  
  console.log(props.names);
  return (
    <div>
      <Welcome name={props.names[0]} />
      <Welcome name={props.names[1]}/>
      <Welcome name={props.names[2]} />
      <Welcome name={props.names[3]} />
    </div>
  )
}


//props is passed as a single object= {name:"Tim"}
const element2 = <Repeat names={nameArray}/>;

/////////////////////////////////////////////////////////////////////////////////////////////
//STATE AND LIFECYCLE OF REACT




//ReactDOM updates the DOM to match element
const root = ReactDOM.createRoot(document.getElementById("root"));

class Clock extends React.Component{
  constructor(props) {
    super(props);
    //this.state is init with obj of current time
    this.state = {date: new Date()}; 
  }

  //runs after the component output has been rendered to the DOM
componentDidMount() {
  //timerID is an additional field to store states that 
  //are not part of the typical Data flow
  console.log("mounted");
  this.timerID = setInterval(() => this.tick(), 1000);
}
//this lifecycle method removes timer
componentWillUnmount() {
  console.log("unmounted");
  clearInterval(this.timerID);
}

tick() {
  console.log("hello"); 
  this.setState({
    date: new Date()
  });
 }
  render(){
    return (
    <div>
      <h1>Hello, World!</h1>
      {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  )
  }
}


// function foo() {
//   const element = <Clock date={new Date()}/>
//   root.render(element);
// }

// setInterval(foo,1000);



root.render(<Clock />);

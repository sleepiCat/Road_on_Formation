// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root2'));
// function tick() {
//     const element = (
//         <div>
//         <h1>Hello!</h1>
//         <h2>It is currently {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );

//     root.render(element);
// }

// setInterval(tick, 1000);

/*
Components let you split the UI into independent reusable pieces
Conceptually, COMPONENTS are like JavaScript functions
they accept attributes (called props) and return Reat elements describing 
what should appear in screen
*/

//define component as function of ES6 class
function Welcome1(props) {
    return <h1>Hello, {props.name}</h1>;
}
//this is a function component

//ES6 class definition of component
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

//elements can be user defined components:

const element = <Welcome name="Sara" />;

//JSX attributes and children are passed to component as a single object called props

/*const root = ReactDOM.createRoot(document.getElementById('root2'));*/
/*root.render(element);*/

/*
1. We call root.render() with the <Welcome name="Sara" /> element.
2. React calls the Welcome component with {name: 'Sara'} as the props.
3. Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
4. React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.
*/

class App extends React.Component{
    render() {
        return (
            <div>
        <Welcome name="Tim"/>
        <Welcome name="Sam"/>
        <Welcome name="Mel"/>
        </div>
        )
    }
}

function Name(props) {
    return <h1>props.user.name</h1>
}

/*root.render(<div><Name user={props.author}/></div>);*/


///////////////////////////////////////////////////////////////
//Composing Components

//Original Component

// function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <img className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//           />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }
function Avatar(props) {
    return(
        <div className="UserInfo">
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
        <div className="UserInfo-name">
            {props.user.name}
        </div>
        </div>
          )
}

class Comment_text extends React.Component{
    render() {
        return (
            <div className="Comment-text">
                {props.comment.text}
            </div>
        )
    }

}

class Comment_date extends React.Component{
    render() {
        return (
            <div className="Comment-date">
          {formatDate(props.comment.date)}
        </div>
        )
    }
}

function Comment(props) {
    return (
      <div className="Comment">
          <Avatar user={props.author} />
        <Comment_text comment={props.text} />
        <Comment_date comment={props.date} />
      </div>
    );
  }

//State and LifeCycle



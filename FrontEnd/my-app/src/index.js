import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Row from "./Row.js";


//class component
// export default class Greeting extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Mary',
//       surname: 'Poppins',
//       width: window.innerWidth
//     }//couple more bindings
//     this.handleNameChange = this.handleNameChange.bind(this);
//   }
      // componentDidMount() {
      //   document.title = this.state.name + ' ' + this.state.surname;
      // window.addEventListener('resize', this.handleResize);
    //}

      // componentDidUpdate() {
      //   document.title = this.state.name + ' ' + this.state.surname;
      // }


      // componentWillUnmount() {
      //   window.removeEventListener('resize', this.handleResize);
      // }
      // handleResize() {
      //   this.setState({
      //     width: window.innerWidth
      //   });
      // }

//   handleNameChange(e) {
//     this.setState({
//       name : e.target.value
//     })
//   }

//   render () {
//     return (
//       <section>
//           <Row label="Name">
//               <input
//                 value={this.state.name}
//                 onChange={this.handleNameChange}
//               />

//           </Row>
//       </section>
//   )
//   }
// }

//function component



function Greeting(props) {
  const [name, setName] = useState('Mary');
  const [surName, setSurName] = useState('Poppin');

  useEffect(() => {
    document.title = name + ' ' + surName;
  })


  //custom hooks
  const width = useWindowWidth();
  
  
  function handleNameChange(e) {
    console.log(e);
    setName(e.target.value);
  }
  
  function handleSurnameChange(e) {
    setSurName(e.target.value);
  }
  
  
  return (
    <section>
      <Row label="Name">
        <input
        value={name}
        onChange={handleNameChange}
        />
      </Row>
      <Row label="Surname">
        <input
        value={surName}
        onChange={handleSurnameChange}
        />
      </Row>
      <Row label="Width">
        {width}
      </Row>
    </section>
  )
}


function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    //optional cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}

// function Greeting(props) {
//   //console.log(props);
//     return (
//         <section>
//             <Row label="Name">
//                 {props.name}
//             </Row>
//         </section>
//     )
// }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting/>);
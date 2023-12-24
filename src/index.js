import ReactDOM from "react-dom/client";
import React, {Component,Fragment} from 'react';
//import {Component} from 'react';

import './index.css';

// let aelement = <h1>Hello Tech!!</h1>
// const aroot = ReactDOM.createRoot(document.getElementById("root"));   
// aroot.render(aelement);


// Old Style

// let belement = React.createElement('h1',null,'Hello React!!');
// const broot = ReactDOM.createRoot(document.getElementById("root"));
// broot.render(belement);

//below class is component

// class Index extends React.Component
// {
//   render()
//   {
//     return <h1>Hello Stack!!</h1>
//   }
// }

// const croot = ReactDOM.createRoot(document.getElementById("root"));
// croot.render(<Index/>); //<----------------------------------------------Way to pass component


// class Index extends React.Component
// {
//   render()
//   {
//     return <div>
//          <h1>Hello Stack!!</h1> <br />
//          <h3> Welcome to TechWorld!! </h3>
//     </div> 
//   }
// }

// const droot = ReactDOM.createRoot(document.getElementById("root"));
// droot.render(<Index/>)


// class Index extends Component
// {
//   render()
//   {
//     return <div>
//          <h1>Hello Stack!!</h1> 
//          <h3> Welcome to TechWorld!! </h3>
//     </div> 
//   }
// }

// const eroot = ReactDOM.createRoot(document.getElementById("root"));
// eroot.render(<Index/>)


//fragmentation

// class Index extends Component
// {
//   render()
//   {
//     return <React.Fragment> 
//          <h1>Hello Stack!!</h1> 
//          <h3> Welcome to TechWorld!! </h3>
//          </React.Fragment>
//   }
// }

// const froot = ReactDOM.createRoot(document.getElementById("root"));
// froot.render(<Index/>)


// class Index extends Component
// {
//   render()
//   {
//     return <Fragment> 
//             <h1>Hello Stack!!</h1> 
//             <h3> Welcome to TechWorld!! </h3>
//          </Fragment>
//   }
// }

// const groot = ReactDOM.createRoot(document.getElementById("root"));
// groot.render(<Index/>)


// fragment shortcut is <>

// class Index extends Component
// {
//   render()
//   {
//     return <> 
//             <h1>Hello Stack!!</h1> 
//             <h3> Welcome to TechWorld!! </h3>
//          </>
//   }
// }

// const hroot = ReactDOM.createRoot(document.getElementById("root"));
// hroot.render(<Index/>)


// class Index extends Component
// {
//   render()
//   {
//     return(<> 
//             <h1>Hello Stack!!</h1> 
//             <h3> Welcome to TechWorld!! </h3>
//          </>);
//   }
// }

// const iroot = ReactDOM.createRoot(document.getElementById("root"));
// iroot.render(<Index/>)


// let x=2,y=5;
// let delement = (<>
//   <h1>Hi</h1>
//   <p>Sum of {x} and {y} = {x+y}</p>
//   <p>Product of {x} and {y} = {x*y} </p>
//   <br />
//   <input type="text"/>
//   <input type="button" value="save" />
// </>)

// const jroot = ReactDOM.createRoot(document.getElementById("root"));
// jroot.render(delement);


// class Index extends Component
// {
//   render()
//   {
//     let a=10, b=20;
//     return(<> 
//             <h1>Hello Stack!!</h1> 
//             <h3> Welcome to TechWorld!! </h3>
//             <p>Sum of 5 and 5 is {5+5}</p>
//             <p>Multiplication of 5 and 5 is {5*5}</p>
//             <p>Sum of {a} and {b} is = {a+b}</p>
//             <p>Multiplication of {a} and {b} is {a*b}</p>

//          </>);
//   }
// }

// const kroot = ReactDOM.createRoot(document.getElementById("root"));
// kroot.render(<Index/>)



// let eelement = (<>

//    <label htmlFor="name" data-myattr="tech">Name</label>
//    <h2 className="tech">Hello Techno!!</h2>

// </>)

// const lroot = ReactDOM.createRoot(document.getElementById("root"));
// lroot.render(eelement);



// let felement = (<> 
//   <h2 style=
//   {{
//     color:'red',
//     fontSize:'100px'
//     }}>
//       Hello Techno!!
//   </h2>

// </>)

// const mroot = ReactDOM.createRoot(document.getElementById("root"));
// mroot.render(felement);


// '' when we use - in object
// In below code font-size give warning.

// let gelement = (<>
//   <h2 style=
//   {{
//     color:'red',
//     'font-size':'100px'
//     }}>
//       Hello Techno!!
//   </h2>

// </>)

// const nroot = ReactDOM.createRoot(document.getElementById("root"));
// nroot.render(gelement);


//to reduce repeating code
// let myStyle = {
//   color:'red',
//   fontSize:'100px'
// }
// let helement = (<>
//   <h2 style={myStyle}>Hello from VLC Media!!</h2>
//   <br />
//   <h3 style={myStyle}>Hello from MNC!!</h3>
// </>)

// const oroot = ReactDOM.createRoot(document.getElementById("root"));
// oroot.render(helement);


// let aa=13,bb=14;
// let ielement = (<>
//   {

//     aa>bb?'aa>bb':aa<bb?'aa<bb':'aa==bb' // ; will give error

//   }
// </>)

// const proot = ReactDOM.createRoot(document.getElementById("root"));
// proot.render(ielement);


// let loggedIn = true;
// let jelement = (

// loggedIn ?
// <>
//     <h2>You are logged In</h2>

//     <p>Go ahead</p>
// </>

// :
// <>
//  <h2>Please loggedIn first</h2>
// </>

// )

// const qroot = ReactDOM.createRoot(document.getElementById("root"));
// qroot.render(jelement);


// const name = ["Ajeet","Mohan","Chandan","Samir"];
// let namelist = [];
// for(let i=0;i<name.length;i++)
// {
//   namelist.push(<li key={i}>{name[i]}</li>); //keyto remove warning of key

// }

// let kelement = (

// <>
//  <ul>{namelist}</ul>
// </>

// )

// const rroot = ReactDOM.createRoot(document.getElementById("root"));
// rroot.render(kelement);


const aname = ["Ajeet","Mohan","Chandan","Samir"];

let anamelist = <ul>
  {
    aname.map((val,index)=>{

      return <li key={index}>{val}</li>

    })
  }
</ul>

const sroot = ReactDOM.createRoot(document.getElementById("root"));

sroot.render(anamelist);
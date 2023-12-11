/* 
JSX (JavaScript XML):

JSX is a syntax extension for JavaScript that looks similar to XML or HTML. 
It allows you to write HTML-like code in your JavaScript files, making it easier to describe the structure of your UI.

Props (Properties):

Props are used to pass data from a parent component to a child component. 
They are immutable and help in making components more dynamic and reusable.
State:

State is used for managing the internal data of a component. 
Unlike props, state can be changed by the component itself. State changes trigger re-rendering of the component.
*/
//Props
// import React from "react";
// import ChildComponent from "./ChildComponent";

// const ParentComponent = () =>{
//     const dataFromParent = "This is from parent component"
//     return(
//         <div>
//             <h1>Parent Component</h1>
//             <ChildComponent message = {dataFromParent}/>
//         </div>
//     )
// } 
// export default ParentComponent;
// //This is childComponent written here for demo
// import React from 'react';

// const ChildComponent = (props) => {
//   return (
//     <div>
//       <h3>Child Component</h3>
//       <p>{props.message}</p>
//     </div>
//   );
// };

// export default ChildComponent;

// //State
// /* State represents the internal data of a component. 
// When the state changes, React triggers a re-render of the component to reflect the updated state. 
// State is mutable and managed within the component. 
// */
// //Class-based Component with State:
// import React, {Component} from 'react';
// class StatefulComponent extends Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             count : 0,
//         };
//     }

//     handleIncrement = () =>{
//         this.setState((prevState)=>{
//             count:prevState.count + 1;
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <h2>StatefulComponent</h2>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.handleIncrement}>Increment</button>
//             </div>
//         )
//     }
// }
/**
 * React State
State is a feature that allows React components to change their output over time in response to user actions, network responses, and anything else. It's similar to props, but it is private and fully controlled by the component.
export default function Counter(){
    const[count, setCount] = useState(0);
    return(
        <div>
        <p>clicked {count} times</p>
        <button onClick = {()=>{
            setCount((prev)=>{
                return prev+1;
            })
        }}> Click</button></div>
    )
}
 */
//Functional Component with State (using Hooks):
// import React, {useState} from "react";
// const FunctionalComponent = () =>{
//     const[count, setCount] = useState(0);
    
//     const handleDecrement = () =>{
//         setCount((prev) =>{
//             return prev-1;
//         })
//     }
//     return(
//         <div>
//             <h2>Functional Component</h2>
//             <p>Count: {count}</p>
//             <button onClick={handleDecrement}>Decrement</button>
//         </div>
//     )
// }
// export default FunctionalComponent;



// Implementing Conditional Rendering
// export default function ToggleText(){
//     const[isVisible, setIsVisible] = useState(true);
//     return(
//         <div>
//             {isVisible &&<p>this text is toggled</p>}
//             <button onClick={()=>{
//                 setIsVisible(!isVisible)
//             }}>Toggle Text</button>
//         </div>
//     )
// }


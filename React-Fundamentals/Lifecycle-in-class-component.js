// import React, {Component}  from "react";

// class LifecycleExample extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             message : "hello from constructor",
//         }
//         console.log("constructor-component is being constructed")
//     };

//     static getDerivedStateFromProps(nextProps, nextState) {
//         console.log(
//           'getDerivedStateFromProps - Called before every render when props or state change',
//           nextProps,
//           nextState
//         );
//         return null; // You can return an object to update state, or null if no state update is needed
//       }
//       componentDidMount() {
//         console.log('componentDidMount - Component has been rendered to the DOM');
//       }
//       shouldComponentUpdate(nextProps, nextState) {
//         console.log('shouldComponentUpdate - Before rendering, return true if rendering is necessary');
//         return true;
//       }


//       getSnapshotBeforeUpdate(prevProps, prevState) {
//         console.log(
//           'getSnapshotBeforeUpdate - Called right before changes from the virtual DOM are to be reflected in the DOM',
//           prevProps,
//           prevState
//         );
//         return null;
//       }



//       componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log('componentDidUpdate - Called after the render is committed to the DOM', snapshot);
//       }
    
//       // Unmounting Phase
//       componentWillUnmount() {
//         console.log('componentWillUnmount - Called just before component is unmounted and destroyed');
//       }
    
//       // Error Handling
//       componentDidCatch(error, info) {
//         console.log('componentDidCatch - Called when an error occurs during rendering', error, info);
//       }
    
//       // Handling State Changes
//       handleClick = () => {
//         this.setState({ message: 'Updated Message!' });
//       };
    

//     render(){
//         console.log("render-component is rendering")
//         return(
//             <div>
//                 <h2>{this.state.message}</h2>
//                 <button onClick={this.handleClick}>Update message</button>
//             </div>
//         )
//     }
// }


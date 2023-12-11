/**Lifting state up" is a pattern in React where you move the state of a component
 *  to a higher-level or parent component 
 * in order to share the state between components.
 *  This is particularly useful when you have multiple components that need to share and synchronize the same state. By lifting the state up to a common ancestor, you can maintain a single source of truth for that state.
Benefits of lifting state up:

Single Source of Truth:
The parent component serves as the single source of truth for the shared state.
Easier to Understand and Debug:
The code becomes more readable and easier to maintain since the logic related to state management is centralized.
Consistent State Across Components:
All components that need access to the shared state will have a consistent view of that state.
Here's an example to illustrate the concept of lifting state up:
 * 
 */

import React, {useState} from 'react';
import ChildComponent from "./ChildComponent"
export const ParentComponent = () =>{
  const [count, setCount] = useState(0);
  const handleClick = () =>{
      setCount( (prev) => prev+1 );
  }
  return(
      <div>
          <h1>Parent Component</h1>
          {/* <button onClick={handleClick}>Increment</button> */}
          <ChildComponent 
              value={count}
              onIncement={handleClick} />

      </div>
  )
}
const ChildComponent = ({ value, onIncrement }) => {
    return (
      <div>
        <p>Value: {value}</p>
        <button onClick={onIncrement}>Increment</button>
      </div>
    );
  };
  /**
   * 
   * @ The state is passed down to the ChildComponent as a prop (value).
The ChildComponent receives the state as a prop and also receives a function (onIncrement) that can be called to update the state in the parent component.
By doing this, the state is "lifted up" from the child to the parent.
   */


function ParentComponent(){
  const [state, setState] = useState('initial state');
  return(
    <div>
      <p>{state}</p>
      <childComponent updateParentState={setState}/>
    </div>
  )
}
export default ParentComponent;

function childComponent({updateParentState}){
  return(
    <button onClick={()=>{
      updateParentState('New State');
    }}>Update Parent State</button>
  )
}
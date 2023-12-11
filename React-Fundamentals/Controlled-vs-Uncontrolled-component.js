/*
Controlled Components:
In a controlled component, form data is handled by the state of a React component. 
The state is used to control the value of the form elements, and any user input is handled through React state and event handlers.
Controlled components are components where React controls and manages the state. The component receives its current value and a function to update its value via props. The state is kept in the parent component or a state management solution, 
and the child component doesn't maintain its own state.
*/
import React, { useState } from 'react';

export const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
/**Uncontrolled Components:
State is Managed by the DOM:

In uncontrolled components, the state of form elements is managed by the DOM itself.
React does not control or manage the state of the form element.
No onChange Event Handling:

Changes to the form element do not trigger React events.
Instead, the application may rely on native DOM events.
 * 
 * 
 */
import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef();

  const handleButtonClick = () => {
    // Access the current value of the input directly through the DOM
    console.log('Input Value:', inputRef.current.value);
  };

  return (
    <div>
      <input 
      type="text" 
      ref={inputRef} 
      />
      <button onClick={handleButtonClick}>Get Value</button>
    </div>
  );
};

/**When to Use Each:
Controlled Components:

Provide more control and consistency in managing the form state.
Useful for implementing features like form validation, dynamic form behavior, and handling user interactions in a controlled manner.
Uncontrolled Components:

Might be suitable when integrating with non-React code or when relying on the native behavior of form elements.
Can be simpler for certain scenarios where explicit control over the state is not required.
 * 
 */
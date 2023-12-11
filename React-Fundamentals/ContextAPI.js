

// // Understanding React Context API

// // create a context that holds a user's name and a function to update it. Then, create a child component that displays the user's name and a button to change it.

// import React, { useState, createContext, useContext } from 'react';
    
//     const UserContext = createContext();

//     function UserProvider({children}){
//         const [name, setName] = useState('john doe');
//         const value={
//             name, 
//             changeName: () =>{
//                 setName('shafi');
//             }
//         }
//         return <UserContext.Provider value={value}>{children}</UserContext.Provider>
//     }

//     function ChildComponent(){
//         const [name, changeName] = useContext(UserContext);
//         return(
//             <div>
//                 <p>Name: {name}</p>
//                 <button onClick={changeName}>change name</button>
//             </div>
//         )
//     }
// function App() {
//         return (
//           <UserProvider>
//             <ChildComponent />
//           </UserProvider>
//         );
//       }
      
//       export default App;

// // Step 1: Import React and createContext
// import React, { createContext, useState, useContext } from 'react';

// // Step 2: Create a Context
// const MyContext = createContext();

// // Step 3: Create a Context Provider (a component that wraps your app)
// const MyProvider = ({ children }) => {
//   const [value, setValue] = useState('Default Value');

//   return (
//     <MyContext.Provider value={{ value, setValue }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// // Step 4: Use the Context Provider in your App component
// const App = () => {
//   return (
//     <MyProvider>
//       <ChildComponent />
//     </MyProvider>
//   );
// };

// // Step 5: Use the Context in Child Components
// const ChildComponent = () => {
//   // Step 6: Use the useContext hook to access the context value
//   const { value, setValue } = useContext(MyContext);

//   return (
//     <div>
//       <p>Value from Context: {value}</p>
//       <button onClick={() => setValue('New Value')}>Change Value</button>
//     </div>
//   );
// };

// export default App;

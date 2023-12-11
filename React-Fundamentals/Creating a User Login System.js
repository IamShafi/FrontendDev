import React, {useState} from "react";

const Login = ({handleLogin}) =>{
    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(username === 'user' && password === 'password'){
            handleLogin(username);
        }
        else{
            alert('Invalid login');
        }
    }

    return(
        <div>
            <form
            onSubmit={handleSubmit}
            >
                <label>
                    UserName:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) =>{
                            setUserName(e.target.value)
                        }}
                    />
                </label>
                <label>
                    password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>{
                            setUserName(e.target.value)
                        }}
                    />
                </label>

                <button type="submit">submit</button>

            </form>
        </div>
    )

}

import React from 'react';

const Dashboard = ({ username, handleLogout }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {user ? <Redirect to="/dashboard" /> : <Login handleLogin={handleLogin} />}
        </Route>
        <Route path="/dashboard">
          {user ? (
            <Dashboard username={user} handleLogout={handleLogout} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;

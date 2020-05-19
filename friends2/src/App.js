import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/protected">Dashboard</Link>
                </li>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

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
                    <PrivateRoute
                        exact
                        path="/protected"
                        component={Dashboard}
                    />
                    <Route path="/login" component={Login} />
                    <Route component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

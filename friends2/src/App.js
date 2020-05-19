import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
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
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <Switch>
                    <PrivateRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                    />
                    <Route path="/login" component={Login} />
                    <Route component={Login} />
                    <Route path="/loadingpage" component={LoadingPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

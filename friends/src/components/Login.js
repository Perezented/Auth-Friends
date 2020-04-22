import React from 'react';

import { authenticAxios } from '../utils/authenticAxios';

class Login extends React.Component {
    state = {
        creds: {
            username: '',
            password: '',
        },
    };

    handleChanges = (e) => {
        this.setState({
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value,
            },
        });
    };

    login = (e) => {
        e.preventDefault();
        authenticAxios()
            .post('/api/login', this.state.creds)
            .then((res) => {
                // console.log(res);
                // console.log(this.props.history);
                localStorage.setItem('token', JSON.stringify(res.data.payload));
                this.props.history.push('/protected');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <section>
                <h4>Hey there, looks like you need to login:</h4>
                <form onSubmit={this.login}>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={this.state.creds.username}
                        onChange={this.handleChanges}
                    />
                    <br />
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={this.state.creds.password}
                        onChange={this.handleChanges}
                    />
                    <br />
                    <button>Login</button>
                </form>
            </section>
        );
    }
}

export default Login;

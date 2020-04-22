import React from 'react';

import { authenticAxios } from '../utils/authenticAxios';

class Login extends React.Component {
    state = {
        creds: {
            username: '',
            password: '',
            isLoading: false,
        },
    };

    handleChanges = (e) => {
        this.setState({
            creds: {
                ...this.state.creds,
                isLoading: true,
                [e.target.name]: e.target.value,
            },
        });
    };

    login = (e) => {
        e.preventDefault();
        authenticAxios()
            .post('./api/login', this.state.creds)
            .then((res) => {
                console.log(res);
                console.log(this.props.history);
                localStorage.setItem('token', JSON.stringify(res.data.payload));
                this.props.history.push('/protected');
                this.state.creds.isLoading = false;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <section>
                <h4>Please log in:</h4>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.creds.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.creds.password}
                        onChange={this.handleChanges}
                    />
                    <button>Login</button>
                </form>
            </section>
        );
    }
}

export default Login;

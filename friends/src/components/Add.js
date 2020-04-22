import React from 'react';

import { authenticAxios } from '../utils/authenticAxios';

class Add extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: '',
        },
    };

    handleChanges = (e) => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value,
            },
        });
    };

    submitFriend = (e) => {
        e.preventDefault();
        authenticAxios()
            .post('/api/friends', this.state.friend)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    friends: res.data,
                });
                this.props.history.push('/protected');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <section>
                <h4>Please log in:</h4>
                <form onSubmit={this.submitFriend}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={this.state.friend.name}
                        onChange={this.handleChanges}
                    />
                    <br />
                    Age:
                    <input
                        type="text"
                        name="age"
                        value={this.state.friend.age}
                        onChange={this.handleChanges}
                    />
                    <br />
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={this.state.friend.email}
                        onChange={this.handleChanges}
                    />
                    <br />
                    <button>Add Friend</button>
                </form>
            </section>
        );
    }
}

export default Add;

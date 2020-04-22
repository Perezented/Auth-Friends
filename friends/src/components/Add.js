import React from 'react';

import { authenticAxios } from '../utils/authenticAxios';

class Add extends React.Component {
    state = {
        friends: [],
    };

    componentDidMount() {
        this.getData();
    }
    getData = () => {
        authenticAxios()
            .post('/api/friends', this.state.friends)
            .then((res) => {
                // console.log('res.data: ', res.data);
                // console.log('state: ', this.state);
                this.setState({
                    friends: res.data,
                });
            })
            .catch((err) => console.log('error', err));
    };
    submitFriend = (e) => {
        e.preventDefault();
        authenticAxios()
            .post('/api/friends', this.state.friends)
            .then((res) => {
                console.log(res);
                console.log(this.props.history);
                // localStorage.setItem('token', JSON.stringify(res.data.payload));
                // this.props.history.push('/protected');
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
                        value={this.state.friends.age}
                        onChange={this.handleChanges}
                    />
                    <br />
                    Age:
                    <input
                        type="text"
                        name="age"
                        value={this.state.friends.age}
                        onChange={this.handleChanges}
                    />
                    <br />
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={this.state.friends.email}
                        onChange={this.handleChanges}
                    />
                    <br />
                    <input
                        type="hidden"
                        name="id"
                        value={Math.random() * 999999}
                    />
                    <button>Add Friend</button>
                </form>
            </section>
        );
    }
}

export default Add;

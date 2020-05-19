import React, { useState } from 'react';
import { authenticatedAxios } from '../utils/authenticatedAxios';
import { useHistory } from 'react-router-dom';

const AddFriend = (props) => {
    const [friend, setFriend] = useState();
    const { push } = useHistory();

    const handleChanges = (event) => {
        event.preventDefault();
        const newerFriendData = {
            ...friend,
            [event.target.name]: event.target.value,
            id: Date.now(),
        };
        return setFriend(newerFriendData);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        authenticatedAxios()
            .post('/api/friends', friend)
            .then((res) => {
                push('/loader');
                push('/dashboard');
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    };

    return (
        <section>
            <h3>Add a friend here: </h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    value={props.name}
                    placeholder="Name"
                    onChange={handleChanges}
                />
                <label htmlFor="age">Age: </label>
                <input
                    type="text"
                    name="age"
                    value={props.age}
                    placeholder="Age"
                    onChange={handleChanges}
                />
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    name="email"
                    value={props.email}
                    placeholder="Email"
                    onChange={handleChanges}
                />
                <button>Submit</button>
            </form>
        </section>
    );
};

export default AddFriend;

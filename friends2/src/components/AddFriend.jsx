import React, { useState } from 'react';

const AddFriend = (props) => {
    const [friend, setFriend] = useState();

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
        console.log(friend);
    };

    return (
        <section>
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

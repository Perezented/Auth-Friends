import React, { useEffect, useState } from 'react';
import { authenticatedAxios } from '../utils/authenticatedAxios';
import AddFriend from './AddFriend';

const Dashboard = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        authenticatedAxios()
            .get('/api/friends')
            .then((res) => {
                console.log(res.data);
                setFriends(res.data);
            });
    }, []);
    return (
        <section>
            <h1>
                Welcome to your dashboard <br />
                <AddFriend />
                <br /> Here's a list of your friends
            </h1>
            {friends.map((value) => {
                console.log(value);
                return (
                    <div key={value.id}>
                        <h2>Name: {value.name}</h2>
                        <h3>Age: {value.age} </h3>
                        <h3>Email: {value.email} </h3>
                    </div>
                );
            })}
        </section>
    );
};

export default Dashboard;

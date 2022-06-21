import React from "react";
import './AddUser.css';
import Card from '../UI/Card.js';


const AddUser = props =>{
    function AddUserHandler(event){
        event.preventDefault();

    }
    return(
    <Card>
        <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username"></input>
            <label htmlFor="age">Age(years)</label>
            <input id="age"></input>
            <button type="submit">AddUser</button>
        </form>
    </Card>
    );
}

export default AddUser;


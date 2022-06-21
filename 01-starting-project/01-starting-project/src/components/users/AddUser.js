import React from "react";
import './AddUser.css';

const AddUser = props =>{
    function AddUserHandler(event){
        event.preventDefault();

    }
    return(
        <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username"></input>
            <label htmlFor="age">Age(years)</label>
            <input id="age"></input>
            <button type="submit">AddUser</button>
        </form>
    );
}

export default AddUser;


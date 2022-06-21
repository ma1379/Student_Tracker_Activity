import React from 'react';
import "./AddUser.css";

const AddUser = props => {
    return (

       <form>
        <label htmlFor="username">Username</label>
        <input type = "text" id="username"></input >
        <label htmlFor="age"> Age (years) </label>
        <input type = "number" id="age"></input>

        <button type = 'submit'>Add User</button>
        </form>

    );
};

export default AddUser;
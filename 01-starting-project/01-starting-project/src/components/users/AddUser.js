import React, { useState } from "react";
import './AddUser.css';
import Card from '../UI/Card.js';
import Button from '../UI/Button';


const AddUser = props => {
    const [ enteredUsername, setEnteredUsername ] = useState("");
    const [ enteredAge, setEnteredAge ] = useState("");

    function AddUserHandler(event) {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }

    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }
    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }
    return (
        <Card>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age(years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                <Button type="submit">AddUser</Button>
            </form>
        </Card>
    );
}

export default AddUser;


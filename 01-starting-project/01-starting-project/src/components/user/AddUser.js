import React, {useState} from 'react';
import "./AddUser.css";
import Card from "../UI/Card.js";
import Button from "./components/User/Button.js";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    function addUserHandler(event) {
        event.preventDefault();
    }
    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }
    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }
    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' onChange = {usernameChangeHandler}></input>
                <label htmlFor='age'>Age (years)</label>
                <input id='age' type='number' onChange = {ageChangeHandler}></input>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
}
export default AddUser;

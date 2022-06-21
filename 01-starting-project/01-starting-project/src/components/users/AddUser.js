import React, {useState} from 'react';
import './AddUser.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
const AddUser = props => {
    function addUserHandler(event) {
        event.preventDefault();
    }
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }
    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }
    return(
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' className='input' onChange={usernameChangeHandler}></input>
            <label htmlFor='age' className='label'>Age (years)</label>
            <input id='age' type='number' className='label' onChange={ageChangeHandler}></input>
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
    );
};
export default AddUser;
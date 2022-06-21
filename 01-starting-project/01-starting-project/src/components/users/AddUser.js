import React from 'react';
import './AddUser.css';
import Card from '../UI/Card';
const AddUser = props => {
    function addUserHandler(event) {
        event.preventDefault();
    }
    return(
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' className='input'></input>
            <label htmlFor='age' className='label'>Age (years)</label>
            <input id='age' type='number' className='label'></input>
            <button type='submit'>Add User</button>
        </form>
        </Card>
    );
};
export default AddUser;
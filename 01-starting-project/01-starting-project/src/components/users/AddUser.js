import React,{useState} from "react";
import './AddUser.css';
import Card from '../UI/Card.js';
import Button from '../UI/Button';


const AddUser = props =>{
    const{enteredUsername,setEnteredUsername}=useState("");
    const{enteredAge,setEnteredAge}=useState("");

    function AddUserHandler(event){
        event.preventDefault();

    }
    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }
    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }
    return(
    <Card>
        <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age(years)</label>
            <input id="age" onChange={ageChangeHandler}></input>
            <Button type="submit">AddUser</Button>
        </form>
    </Card>
    );
}

export default AddUser;


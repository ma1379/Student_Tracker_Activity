import React from 'react';
import "./UsersList.css";
import Card from "../UI/Card.js"

const UserList = props => {

    return(
        <Card>
            <ul className="users">
                {props.users.map(user=>
                <li>{user.map}({user.age}yeatsold)</li>
                )}
            </ul>
        </Card>

    );
} 

export default UserList;
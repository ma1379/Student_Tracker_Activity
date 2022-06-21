import React from "react";
import './UsersList.css';
import Card from '../UI/Card.js';


const UsersList = props => {
    return (
        <Card>
            <ul className="users">
              {props.users.map(user =>
              <li>{user.name}({user.age} years old)</li>
              )}
            </ul>
        </Card>
    );
}

export default UsersList;
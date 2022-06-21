import React from 'react';
import './UsersList.css';
const UsersList = props => {
    return(
        <ul className='users'>
          {props.users.map(user => <li>{user.name} {user.age} years old</li>)}  
        </ul>
    );
}
export default UsersList;
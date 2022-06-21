import React from "react";
import "./UsersList.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const UsersList = (props) => {
    let activeUsers = props.users.filter( user=>user.active === true );
    function deleteHandler(event) {
        props.deleteUser(event.target.value)
    }
  return (
    <Card className="users">
      {activeUsers.map((user) => (
        <li key={user.id}>
          {user.name} {user.age} years old
          <Button clickHandler={deleteHandler} value={user.id}>Delete</Button>
        </li>
      ))}
    </Card>
  );
};
export default UsersList;

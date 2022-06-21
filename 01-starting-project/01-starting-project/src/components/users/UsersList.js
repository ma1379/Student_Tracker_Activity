import React from "react";
import "./UsersList.css";
import Card from "../UI/Card";
const UsersList = (props) => {
  return (
    <Card className="users">
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} {user.age} years old
        </li>
      ))}
    </Card>
  );
};
export default UsersList;

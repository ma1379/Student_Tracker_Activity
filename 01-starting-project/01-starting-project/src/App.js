import React, { useState } from 'react';
import AddUser from './components/users/AddUser.js';
import UsersList from './components/users/UsersList.js';

function App() {
  const [usersList, setUsersList] = useState([]);

  function AddUserHandler(username, age) {
    const newUser = {
      name: username,
      age: age,
      id: Math.random().toString()
    };
    setUsersList((prevUsersList) => {
      return [...prevUsersList, newUser];
    })
  }

  return (
    <div>
      <AddUser onAddUser={AddUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;

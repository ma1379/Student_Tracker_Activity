import React from 'react';
import AddUser from './components/User/AddUser.js';
import UserList from './components/User/UsersList.js';

function App() {
  return (
    <div>
      <AddUser></AddUser>
      <UserList users ={[]}></UserList>
    </div>
  );
}

export default App;

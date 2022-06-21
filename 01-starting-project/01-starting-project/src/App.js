import React,{useState} from 'react';
import AddUser from './components/User/AddUser.js';
import UserList from './components/User/UsersList.js';

function App() {
  const [usersList , setUsersList] = useState([]); 

  function addUserHandler (username , age ){
    const newUser = {
      name: username,
      age: age,
      id: Math.random().toString()
    };
    setUsersList((prevUsersList)=> {
      return [...prevUsersList,newUser];
    })
  }
  return (
    <div>
      <AddUser onAddUser = {addUserHandler}></AddUser>
      <UserList users ={usersList}></UserList>
    </div>
  );
}

export default App;

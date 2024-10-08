import { useState, useEffect, cloneElement } from 'react'
import './App.css'
import { db } from './firebaseConfig'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"

function App() {
  {/* CODE ALONG CODE */}
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  // state, function -> array so initialize it
  const [users, setUsers] = useState([]);

  // creates a reference to what db we are using
 

  const createUser = async () => {
    window.location.reload();
  }

  const updateUser = async (id, age) => {
    window.location.reload();
  }

  const deleteUser = async (id) => {
    window.location.reload();
  }

  // function called when page renders, where we are going to do our api call
  useEffect(() => {

    // bad practice to make use affect async so we make this async function and then call it
    // function for getting data from our database and assigning it to a variable
    const getUsers = async () => {

      // looping through our data and setting our users array to have the documents data and id
    };

    getUsers();
  }, [])

  {/* CODE ALONG END */}

  return (
    <div>
      <input placeholder="Name" onChange={(event) => setNewName(event.target.value)}/>
      <input type="number" placeholder="Age" onChange={(event) => setNewAge(event.target.value)}/>
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h2>Age: {user.age}</h2>
            <button onClick={() => updateUser(user.id, user.age)}>Increase Age</button>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
          </div>
        );
      })}
    </div>
  );

}

export default App

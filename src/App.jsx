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
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
    window.location.reload();
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = {age: age + 1}
    await updateDoc(userDoc, newFields)
    window.location.reload();
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    window.location.reload();
  }

  // function called when page renders, where we are going to do our api call
  useEffect(() => {

    // bad practice to make use affect async so we make this async function and then call it
    // function for getting data from our database and assigning it to a variable
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);

      // looping through our data and setting our users array to have the documents data and id
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [])

  {/* CODE ALONG END */}

  return (
    <div>
      {/* ANYTHING onChange OR onClick THEY DONT GET */}
      {/* Take out any prop stuff that makes it so that the page doesnt render when they first load */}
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

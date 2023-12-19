import React, { useState } from 'react';
import '../App.css';
import firebase from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from 'firebase/database';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const navigator = useNavigate();

  const submit1_register = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, pass);

      if (user) {
        // Access the Firebase Realtime Database
        const db = getDatabase();

        // Define the path where you want to store user data
        const userRef = ref(db, `users/${user.user.uid}`); 

        // Set user information in the database
        await set(userRef, {
          name: name,
          email: email,
          // You may choose not to store the password for security reasons
          // password: pass,
        });
        setName('')
        setEmail('')
        
        alert('Account Created Successfully');
      }
    } catch (error) {
      alert(error);
    }
  };

  const submit_login = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, pass);
      if (user) {
        alert('Login Successfully');
        navigator('./Home');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flightbackground">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true"></input>
        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input type="text" value={name} placeholder="Username" onChange={(e) => setName(e.target.value)}></input>
            <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)}></input>
            <button onClick={submit1_register}>Signup</button>
          </form>
        </div>
        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)}></input>
            <button onClick={submit_login}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import './style.css';

function UserForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    if(userName === '') {
      setUserNameError('User name should not be empty.');
    } else {
      setUserNameError(undefined);
    }

    if(password.length < 6) {
      setPasswordError('Password should contain more than 6 characters.');
    } else {
      setPasswordError(undefined);
    }

    const isValidEmail = input => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

    if(email.length ===0 || !isValidEmail(email)) {
      setEmailError('Email is invalid.');
    } else {
      setEmailError(undefined);
    }

    if(!userNameError && !passwordError && !emailError) {
      event.target.submit();
      alert('Successfully submited!');
    }
    
  };

  return (
    <form id='user-form' onSubmit={handleSubmit}>
      <label htmlFor='user'>User Name:</label>
      <input type='text' id='user' value={userName} onChange={(event) => setUserName(event.target.value) } />
      <p className='error'>{userNameError || ''}</p>

      <label htmlFor='password'>Password:</label>
      <input type='password' id='password' value={password} onChange={(event) => setPassword(event.target.value) } />
      <p className='error'>{passwordError || ''}</p>

      <label htmlFor='email'>Email:</label>
      <input type='text' id='email' value={email} onChange={(event) => setEmail(event.target.value) } />
      <p className='error'>{emailError || ''}</p>

      <input type="submit" />
    </form>
  );
}

export default UserForm;

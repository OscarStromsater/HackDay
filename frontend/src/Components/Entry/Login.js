import React, { useState } from 'react'


const Login = ({ loging,setToken, setAccessToken, setLoging, setEntryMessage }) => {
  const [submitting, setSubmitting] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkPass, setCheckPass] = useState('');
  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    const path = loging ? 'users/login' : 'users/';
    const credentials = { username, password }
    if ((!loging && password === checkPass) || loging) {
      const attempt = await fetch(`http://localhost:3001/${path}`, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      const data = await attempt.json();
      if (data.message === 'User created!') {
        setEntryMessage(true);
          setCheckPass('')
         setSubmitting(false)
         return setLoging(true);
      }
      if (data.role){
        setAccessToken(data.accessToken);
        return setToken({role:'customer'});
      }
      setMessage(data.message);
      setSubmitting(false);
      setTimeout(setMessage, 2500,'');
      return 
    }
    setMessage('Your two passwords did not match... try again');
    setSubmitting(false);
    setTimeout(setMessage, 2500,'');
    return
  };


  return (
    <form className="login-form"onSubmit={handleSubmit}>
      <fieldset className="login__fieldset" disabled={submitting}>
        {message && <h2>{message}</h2>}
        <label className="login__label" htmlFor="username">
          Username:</label>
          <input type="text"
            name="username" value={username}
            onChange={(e) => setUsername(e.target.value)} />
        

        <label className="login__label" htmlFor="password">
          Password:</label>
          <input type="password"
            name="password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        

        {loging || <label className="login__label" htmlFor="checkPass">
          Re-enter Password:
          <input type="password"
            name="checkPass" value={checkPass}
            onChange={(e) => setCheckPass(e.target.value)} />
            </label>}
        {loging ?
            <input name="submit" type="submit" value="Log in" />
          : <input name="signup" type="submit" value="Create account" />}
      </fieldset>
    </form>
  )
}

export default Login;

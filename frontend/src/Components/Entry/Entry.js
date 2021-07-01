import { React, useState } from 'react'
import Login from './Login';

const Entry = ({setToken, setAccessToken}) => {
  const [loging, setLoging] = useState(true);
  const [entryMessage, setEntryMessage] = useState(false);

  const logClick = () => setLoging(true);
  const signClick = () => setLoging(false);

  return (
    <>
      <section className="login">
        <div className="switch">
          <button className="switch__login__btn btn"
          onClick={logClick}>
            Log in
          </button>
          <button className="switch__signup btn"
          onClick={signClick}>
            Create account
          </button>
        </div>
        <div className="login__holder">
          {entryMessage && <h2>User Created, please login</h2>}
          <Login loging={loging} setLoging={setLoging}
          setAccessToken={setAccessToken}
           setEntryMessage={setEntryMessage} setToken={setToken}/>
        </div>
      </section>

    </>
  )
}

export default Entry;

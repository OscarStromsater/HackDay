import { React, useState } from 'react'
import Login from './Login';

const Entry = ({setToken, setKey}) => {
  const [loging, setLoging] = useState(true);
  const [entryMessage, setEntryMessage] = useState(false);

  const logClick = () => setLoging(true);
  const signClick = () => setLoging(false);

  return (
    <div>
      <section>
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
        <div>
          {entryMessage && <h2>User Created, please login</h2>}
          <Login loging={loging} setLoging={setLoging}
          setKey={setKey}
           setEntryMessage={setEntryMessage} setToken={setToken}/>
        </div>
      </section>

    </div>
  )
}

export default Entry;

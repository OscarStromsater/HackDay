import React, {useEffect} from 'react'

const Profile = ({setLogOut}) => {
  useEffect(() => {
    setLogOut(true);
    return ()=> setLogOut(false);
  },[setLogOut])

  return (
    <form className="logout__form">
      <input className="logout__button btn" type="submit" value="logout" />
    </form>
  )
}

export default Profile;

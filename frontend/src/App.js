import { React, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Entry  from './Components/Entry/Entry'
import Welcome from './Components/Page/Welcome';
import Restaurants from './Components/Page/Restaurants/Restaurants';
import Bookings from './Components/Page/Bookings';
import Profile from './Components/Page/Profile';
import NavBar from './Components/Page/NavBar';
import './App.css';


const App = () => {
  const [accessToken, setAccessToken] = useState('');
  const [posting, setPosting] = useState();
  const [token, setToken] = useState();
  const [welcome, setWelcome] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const [orders, setOrders] = useState(false);
  const loginBackground = {
    backgroundImage: "url(https://source.unsplash.com/-eKZLpj7U0E/)"
  }
  const loggedinBackground = {
    backgroundImage: welcome ? "url(https://source.unsplash.com/fdlZBWIP0aM/)":
      logOut ? "url(https://source.unsplash.com/awj7sRviVXo)" :
      orders ? "url(https://source.unsplash.com/ZuIDLSz3XLg)":
      'none'
  }

  if (!token) {
    return (
      <main className='main' style={loginBackground}>
        <BrowserRouter>
          <Switch>
            <Route path='/'>
              <Entry setToken={setToken} setAccessToken={setAccessToken} />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    )
  }

  return (
    <main  className="main" style={loggedinBackground}>
      <BrowserRouter>
        
          <Switch>
            <Route exact path='/'>
              <Welcome setWelcome={setWelcome} />
            </Route>
            <Route exact path='/restaurants'>
              <Restaurants accessToken={accessToken}
              setPost={setPosting} posting={posting}/>
            </Route>
            <Route exact path='/bookings'>
              <Bookings accessToken={accessToken}
              setPost={setPosting} posting={posting} setOrders={setOrders}/>
            </Route>
            <Route exact path='/profile'>
              <Profile setLogOut={setLogOut}/>
            </Route>
          </Switch>
          <NavBar/>
        </BrowserRouter>
    </main>
  );
}

export default App;

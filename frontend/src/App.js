import { React, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Entry  from './Components/Entry/Entry'
import Welcome from './Components/Page/Welcome';
import Restaurants from './Components/Page/Restaurants/Restaurants';
import './App.css';


const App = () => {
  const [key, setKey] = useState('');
  const [token, setToken] = useState()

  if (!token) {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route path='/'>
              <Entry setToken={setToken} setKey={setKey} />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    )
  }

  return (
    <main className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Welcome />
            </Route>
            <Route exact path='/restaurants'>
              <Restaurants />
            </Route>
            <Route exact path='/bookings'>
              <Bookings />
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
          </Switch>
        </BrowserRouter>
    </main>
  );
}

export default App;

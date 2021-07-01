import { React, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Entry  from './Components/Entry/Entry'
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
      
    </main>
  );
}

export default App;

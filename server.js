require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const uuid = require('uuid').v4
const cors = require('cors');
const { authenticateToken } = require('./middleware')
const {users,restaurants} = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
  res.json(users);
})

app.get('/restaurants', authenticateToken, (req, res) => {
  res.json(restaurants)
})

app.post('/users', async (req, res) => {
  const { password, username } = req.body;
  const id = uuid();
  const index = users.findIndex(user => user.username === username)
  if (index === -1) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = { id, username, password: hashedPassword };
      users.push(user);
      return res.status(201).json({ user, message: 'User created!' });
    } catch {
      return res.status(500).json({ message: 'Internal issue, try again later' });
    }
  }
  return res.status(400).json({ message: 'Username already taken' });
})

app.post('/users/login', async (req, res) => {
  const {password, username} = req.body;
  const index = users.findIndex(user => user.username === username)
  if (index === -1) {
    return res.status(400).json({ message: 'Could not Find Username' })
  }
  try {
    if (await bcrypt.compare(password, users[index].password)) {
      const accessToken = jwt.sign(
        {
          username: users[index].username,
          id:users[index].username
        }, process.env.ACCESS_TOKEN_SECRET)
      res.json({ role: 'customer', accessToken: accessToken })
    } else {

      res.json({ message: 'Password or username didnt not match' })
      
    }
  } catch {
    console.log('server fuck up');
    res.status(500).json({ message: 'Internal issue, try again later' });
    
  }
})


PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`running on ${PORT}`));
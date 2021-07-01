require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const uuid = require('uuid').v4
const cors = require('cors');
const { authenticateToken } = require('./middleware')
const {users,restaurants,bookings} = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
  res.json(users);
})

app.get('/api/restaurants/:id', authenticateToken, (req, res) => {
  const searchTerm = new RegExp(`${req.params.id}`, 'i');
  const search = restaurants.filter(restau => searchTerm.test(restau.cuisine))
  res.json(search);
});

app.get('/api/restaurants', authenticateToken, (req, res) => {
  res.json(restaurants)
})

app.post('/api/bookings', authenticateToken, (req,res) => {
  const { id, name, number, startDate, persons } = req.body;
  const userId = req.user.id;
  const restoId = id;
  const day = startDate.slice(0,16)
  const bookingRef = uuid();
  const booking = {
    bookingRef,
    restoId,
    persons,
    customerInfo: {
      userId,
      name,
      number
    },
    day,
  }
  const index = bookings[restoId].findIndex(book => (
    book.customerInfo.userId === booking.customerInfo.userId
     && book.day === booking.day
  ))
  if (index !== -1) {
    return res.json({message:'This booking already exists'})
  }
  bookings[restoId].push(booking);
  return res.json({message:'Your booking is Complete'})
})

app.get('/api/users/bookings',authenticateToken, (req, res) => {

})

app.post('/api/users', async (req, res) => {
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

app.post('/api/users/login', async (req, res) => {
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
          id:users[index].id,
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
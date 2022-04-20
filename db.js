const users = [
  {
    "id": "a05baed4-d6a0-461b-85ae-f0bdbc7b8518",
    "username": "test",
    "password": "$2b$10$K0zRCHIbLfHqf8h//DXRJ.QezblPvx69FyUDgVfmcMh1E98cEjiZC"
}
]

const newVariables = [1,2,3,4]
const restaurants = [
  {
    id:'50d236a5-27f9-4cf7-96a1-9afb3e8b5c02',
    name: 'Mamma\'s Italian',
    address:{
      street:"some street 49",
      postalcode: '14325',
      city:"Stockholm"
    },
    priceRating: '$$$',
    avgRating: '4.89',
    imgUrl: 'https://source.unsplash.com/v4LQkXJPK0o/600x400',
    cuisine:'Italian',
  },
  {
    id:'8b847b1d-175c-42a1-aaf2-e344a3211aca',
    name: 'Monsieur Baguette',
    address:{
      street:"random street 2",
      postalcode: '12335',
      city:"Stockholm"
    },
    priceRating: '$',
    avgRating: '4.10',
    imgUrl: 'https://source.unsplash.com/bOICdD-Gulk/600x400',
    cuisine:'French'
  },
  {
    id:'64b64345-ac69-4de7-bcf1-b5f803c97329',
    name: 'McDonalds Farsta',
    address:{
      street:"this street 12",
      postalcode: '12335',
      city:"Farsta"
    },
    priceRating: '$',
    avgRating: '4.10',
    imgUrl: 'https://source.unsplash.com/OcMKDx5y11A/600x400',
    cuisine:'Burgers'
  }
]
const bookings= [];

module.exports = {
  users,
  restaurants,
  bookings
}
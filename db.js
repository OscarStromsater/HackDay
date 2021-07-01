const users = []

const restaurants = [
  {
    id:'50d236a5-27f9-4cf7-96a1-9afb3e8b5c02',
    name: 'mamma\'s italian',
    address:{
      street:"some street 49",
      postalcode: '14325',
      city:"Stockholm"
    },
    priceRating: '$$$',
    avgRating: '4.89',
    imgUrl: 'https://images.unsplash.com/photo-1534425582704-65e021820688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    cuisine:'Italian'
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
    imgUrl: 'https://images.unsplash.com/photo-1602833334025-5019f046b8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80',
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
    imgUrl: 'https://images.unsplash.com/photo-1602833334025-5019f046b8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80',
    cuisine:'Burgers'
  }
]
const bookings= {
  '8b847b1d-175c-42a1-aaf2-e344a3211aca':[],
  '50d236a5-27f9-4cf7-96a1-9afb3e8b5c02':[],
}
module.exports = {
  users,
  restaurants,
  bookings
}
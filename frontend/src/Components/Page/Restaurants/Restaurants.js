import React, { useEffect, useState } from "react"


const fetchRestaurants = async (search = 'none') => {
  const path = search === 'none' ? 'http://localhost:3001/restaurants'
    : `http://localhost:3001/restaurants/${search}`;
  const restos = await fetch(path);
  const data = await restos.json();
  return data
}

const Restaurants = ({ key }) => {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [searchItem, setSearchItem] = useState('')

  useEffect(() => {
    const restaurants = searchItem ? fetchRestaurants(searchItem)
      : fetchRestaurants();
    setRestaurants(restaurants)
    setTimeout(() => {
      setIsloading(false)
    }, 2000);

  }, [searchItem])

  return (
    <div>
      <SearchBar setSearchItem={setSearchItem} />
      <h1>hello</h1>
      {isLoading ? <p>Restaurants in your area are loading</p> : restaurants.map(restaurant => {
        <Restaurant restaurant={restaurant}/>
      })
      }

    </div>
  )
}

export default Restaurants
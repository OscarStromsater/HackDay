import React, { useEffect, useState } from "react"
import SearchBar from "../SearchBar";
import RestaurantCard from "./RestaurantCard";


const fetchRestaurants = async (accessCode,search = 'none') => {
  const path = search === 'none' ? 'http://localhost:3001/restaurants'
    : `http://localhost:3001/restaurants/${search}`;
  const restos = await fetch(path, {
    method:'GET',
    headers: {
      'authorization': `Bearer ${accessCode}`
    }
  });
  const data = await restos.json();
  return data
}

const Restaurants = ({ accessToken }) => {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [searchItem, setSearchItem] = useState('')

  

  useEffect(() => {
    const puttingOnPage = async () => {
      const restaurants = searchItem ? await fetchRestaurants(accessToken, searchItem)
        : await fetchRestaurants(accessToken);
      console.log(restaurants)
      setRestaurants(restaurants)
      setIsloading(false)
    }
    puttingOnPage();
  }, [searchItem, accessToken])

  return (
    <div>
      <SearchBar setSearchItem={setSearchItem} searchItem={searchItem} />
      <h3>Restaurants in your Area</h3>
      {isLoading ? <p>Restaurants in your area are loading</p> : restaurants.map(restaurant => {
        return <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
      })
      }

    </div>
  )
}

export default Restaurants
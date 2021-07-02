import React, { useState } from 'react'

const SearchBar = ({ setSearchItem}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const searching = e => {
    setSearchQuery(e.target.value);
    setSearchItem(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setSearchItem(searchQuery)
    setSearchQuery('')
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="searchfield">
        <input className="search__input" type="text" name="searchfield" value={searchQuery}
         placeholder="search for what you feel like..."
         onChange={searching} />
      </label>
    </form>
  )
}

export default SearchBar;
import React from 'react'
import Card from '../components/Card'

function Home({
  items, 
  setSearchValue,
  searchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart
}) {
  return (
  <div className="content p-40">
    <div className="d-flex align-center justify-between mb-40">
      <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
      <div className="search-block d-flex">
        <img src="/img/search.svg" alt="Search" />
        {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" 
        src="/img/btn-remove.svg" 
        alt="Clear" 
        />}
        <input 
        onChange={onChangeSearchInput} 
        value={searchValue} 
        type="text" 
        placeholder="Поиск..."
        />
      </div>
    </div>
    <div className="d-flex flex-wrap">
      { items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
        <Card
        key={index}
        onFavorite = {obj => onAddToFavorite(obj)}
        onPlus = {obj => onAddToCart(item)}
        {...item}
        />
      ))}
    </div>
  </div>
  )
}

export default Home

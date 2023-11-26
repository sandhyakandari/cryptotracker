import React from 'react'
import { useState } from 'react';
import  SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import './style.css'
function Search({search,onsearhChange}) {
  return (
    <div className='search-flex'>
    <SearchRoundedIcon></SearchRoundedIcon>
      <input type='text ' placeholder='search' 
      value={search} 
      onChange={(e)=>onsearhChange(e)}
      />
    
    </div>
  )
}

export default Search

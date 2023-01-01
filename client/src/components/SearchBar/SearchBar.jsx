import React from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import '././SearchBar.css'
import {Link} from 'react-router-dom'

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <Link to = '../home'>
        <img src={Logo} alt=""/>
        </Link>
        <div className="SearchBox">
            <input type="text" placeholder='#ExploreHere' style={{color:'white' , opacity:"50%"} }/>
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>  
  )
}

export default SearchBar
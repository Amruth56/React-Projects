import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const [categories, setCategories] = useState([])
    const [showCategories, setShowCategories] = useState(false)
  return (
    <nav>
        <div>
            <Link to='/'>
            <img src="" alt=""></img></Link>
        </div>
    </nav>
  )
}

export default Header
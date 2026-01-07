import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navigation'>
            <div className="main">
                <h1>Routing</h1>
            </div>
            <div className="input">
                <input type="text" placeholder='Enter here' />
            </div>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/product'>Product</Link>
                <Link to='/product/men'>Mens</Link>
                <Link to='/product/women'>Womens</Link>
            </div>
        </div>
    )
}

export default Navbar
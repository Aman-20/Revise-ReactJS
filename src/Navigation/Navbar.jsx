import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={'/'}>Main</Link>
        <Link to={'/course'}>course</Link>
        <Link to={'/form'}>Form</Link>
        <Link to={'/fake'}>Fake-Api</Link>
        <Link to="/section">Section</Link>
    </div>
  )
}

export default Navbar
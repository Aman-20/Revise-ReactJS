import React from 'react'
import Context from '../Context/CreateContext'
import { useContext } from 'react'

const Main = () => {
    const data = useContext(Context);

  return (
    <div>Main page
        <p>This page is showing details using useContext </p>
        <h1>{data.Name}</h1>
        <h2>{data.age}</h2>
    </div>
  )
}

export default Main
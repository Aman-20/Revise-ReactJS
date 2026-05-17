import React, { Children } from 'react'
import Context from './CreateContext'

const ContextState = (props) => {
    const Name = "Aman";
    const age = 22;

  return ( <div> This is ContextState of App.jsx 
    <Context.Provider value={{Name, age}} >{props.children}</Context.Provider>
    </div>
  )
}

export default ContextState
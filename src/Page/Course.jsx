import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { student } from './data';

export const Course = () => {
  const Navigate = useNavigate();

  const back = () => {
    Navigate(-1);
  }
  const main = () => {
    Navigate('/');
  }

  return (
    <>
    <div>Course Page</div>

    {student.map((data)=>(<div key={data.id}>
      <h2>
        <li>
          <Link to={`/course/${data.id}`}> {data.id},{data.name},{data.course} </Link>
        </li>
      </h2>
    </div>))}

    <button onClick={main}>Main</button>
    <button onClick={back}>Back</button>
    </>
  )
}

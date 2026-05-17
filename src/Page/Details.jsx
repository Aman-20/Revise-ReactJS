import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { student } from './data'


const Details = () => {
    const {id} = useParams();
    console.log({id});

    const location = useLocation();

    const course_detail = student.filter( (data)=>(data.id === Number(id) ))
    
  return (
    <div>Details Page
        {course_detail.map((data)=>(
            <div key={data.id}>
                <h1>{data.id}</h1>
                <h1>{data.name}</h1>
                <h1>{data.course}</h1>
            </div>
        ))}

        {location.pathname == '/course/fuck' && <h1>you can add additional details at specific path!!!!!</h1>}

    </div>
  )
}

export default Details
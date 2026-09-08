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

  const [search , setsearch] = useState("");

  const filterStudent = student.filter((data)=>data.name.toLowerCase().includes(search.toLowerCase()));


  const [currPage, setCurrPage] = useState(1);
  const itemPerPage = 5;

  const totalPage = Math.ceil(filterStudent.length / itemPerPage);
  const stIndex = (currPage-1) * itemPerPage;
  const endIndex = stIndex + itemPerPage;

  const currItems = filterStudent.slice(stIndex, endIndex);

  const goToPage = (page) => {
    if(page < 1 || page > totalPage) return;
    setCurrPage(page);
  }


  return (
    <>
    <div>Course Page</div> <br/>
    <button onClick={main}>Main</button>
    <button onClick={back}>Back</button> <br/><br/>

    <input type='text' placeholder='Search the data' value={search} onChange={(e)=>{setsearch(e.target.value); setCurrPage(1);}}/>

    {currItems.map((data)=>(<div key={data.id}>
      <h2>
        <li>
          <Link to={`/course/${data.id}`}> {data.id}: {data.name} & {data.course} </Link>
        </li>
      </h2>
    </div>))}


    <button onClick={()=>{goToPage(currPage-1)}} disabled={currPage === 1}>Prev</button>  
    {currPage} of {totalPage}
    <button onClick={()=>{goToPage(currPage+1)}} disabled={currPage === totalPage}>Next</button>

    </>
  )
}

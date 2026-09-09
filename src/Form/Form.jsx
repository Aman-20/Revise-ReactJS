import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';

const Form = () => {
    const [data, setdata] = useState({
        name:"",
        email:"",
    });

    const handleChange = (e) => {
        setdata({...data, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!data.name.trim() || !data.email.trim()){
            toast.error("data is required");
            return;
        }
        setdata({name:"",email:""});
        toast.success(`your form have been submitted ${data.name}!!`);
    }

    return (
        <div> This is Form Page!!
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={data.name} onChange={handleChange}/>

                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' value={data.email} onChange={handleChange}/>

                <input type="submit" value="Submit!"/>

            </form>
        </div>
    )
}

export default Form
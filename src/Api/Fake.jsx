import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Fake = () => {
    const [data, setdata] = useState([]);
    const [error, seterror] = useState("");
    const [load, setload] = useState(false);

    const fetchData = async () => {
        try {
            setload(true);
            seterror("");

            const api = await fetch("https://jsonplaceholder.typicode.com/posts");

            if (!api.ok) {
                throw new Error("Failed to fetch Api");
            }
            const data = await api.json();
            console.log(data);
            setdata(data);

        } catch (error) {
            console.log(error);
            seterror(error.message);
            
        } finally {
            setload(false);
        }
    }

    return (
        <div>Fake Api
            <button onClick={fetchData}>Fetch-Data</button>

            {load && <p>Loading....</p>}

            {error && <p>{error}</p>}

            {data.map((info) => (<div key={info.id}>
                <br /> <hr />
                <h4>{info.title}</h4>
                <code>{info.body}</code>
            </div>))}
        </div>
    )
}

export default Fake
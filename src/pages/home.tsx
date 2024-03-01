import React, { useState, useEffect } from "react";
import './home.css';

interface Item {
 id: string;
 name: string;
}

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/json-server')
        .then(res => res.json())
        .then(json => {
            setData(json);
            console.log(json);
        });
    }, []);

    return (
        <>
            <h1>Boilerplate for building SPAs using MERN stack</h1>
            <ul className="items">
            {
                data.map((item: Item) => {
                    return <li key={item.id}>{item.id} {item.name}</li>
                })
            }
            </ul>
        </>
    )
}

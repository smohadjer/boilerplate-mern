import React, { useState, useEffect } from "react";

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
            <div>Hello, esbuild!</div>
            <ul>
            {
                data.map((item: Item) => {
                    return <li key={item.id}>{item.id} {item.name}</li>
                })
            }
            </ul>
        </>
    )
}

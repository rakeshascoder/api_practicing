import React, { useEffect, useState } from 'react'

const App = () => {
    let [data, setdata] = useState([])
    useEffect(() => {
        let func = async function () {
            let apidata = await fetch('https://dummyjson.com/products')
                .then(res => res.json())
            console.log(apidata)
            setdata(apidata.products)
        }
        func()
    }, [])

    return (
        <div>
            {data.map((val, index) => {
                return <div key={index}>
                    <h1>id:{val.id}</h1>
                    <h2>brand:{val.brand}</h2>
                    <img src={val.images[1]} alt="" />

                </div>
            })}

        </div>
    )
}

export default App

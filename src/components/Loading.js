import React from 'react'
import "./loading.css"
import load from "../img/load.gif"
const Loading = () => {
    return (
        <div className='loader_container'>
            <img src={load} alt="" />
        </div>
    )
}

export default Loading
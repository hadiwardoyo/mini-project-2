import React from 'react'
import { Outlet } from 'react-router-dom'

const Praktikan = () => {
    return (
        <div className='my-3'>
            <div>
                <h1>Praktikan</h1>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default Praktikan
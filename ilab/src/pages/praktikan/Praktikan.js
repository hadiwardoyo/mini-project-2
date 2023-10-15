import React from 'react'
import { Outlet } from 'react-router-dom'


const Praktikan = () => {
    return (
        <div className='my-3'>

            <Outlet></Outlet>
        </div>
    )
}

export default Praktikan
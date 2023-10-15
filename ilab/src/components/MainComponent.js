import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'
import React from 'react'

const MainComponents = (props) => {
    const { loginStatus, loginCbHandler } = props;

    return (
        <>
            <Routes>
                <Route path='' element={
                    <HomePage loginStatus={loginStatus}
                        loginCbHandler={loginCbHandler}></HomePage>
                }></Route>
                <Route path='praktikan' element={<Praktikan></Praktikan>}>
                    <Route path='create' element={<CreatePraktikan></CreatePraktikan>}></Route>
                    <Route path='update' element={<UpdatePraktikan></UpdatePraktikan>}></Route>
                </Route>
                <Route path='matkul' element={<MataKuliah></MataKuliah>}>
                    <Route path='create' element={<CreateMatkul></CreateMatkul>}></Route>
                    <Route></Route>
                </Route>
            </Routes>
        </>
    )
}

export default MainComponents
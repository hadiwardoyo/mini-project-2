import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar, Footer } from "../components";
import {
    HomePage,
    Praktikan, CreatePraktikan, EditPraktikan, ListPraktikan
} from '../pages'

const MainComponents = (props) => {
    const { loginStatus, loginCbHandler } = props;

    return (
        <>
            <Navbar loginStatus={loginStatus} loginCbHandler={loginCbHandler}></Navbar>
            <Routes>
                <Route path='' element={
                    <HomePage loginStatus={loginStatus}
                        loginCbHandler={loginCbHandler} ></HomePage>
                }></Route>
                <Route path='praktikan' element={<Praktikan></Praktikan>}>
                    <Route path='' element={<ListPraktikan></ListPraktikan>}></Route>
                    <Route path='create' element={<CreatePraktikan></CreatePraktikan>}></Route>
                    <Route path='edit' >
                        <Route path=':id' element={<EditPraktikan></EditPraktikan>}></Route>
                    </Route>
                </Route>
                {/* <Route path='matkul' element={<MataKuliah></MataKuliah>}>
                    <Route path='create' element={<CreateMatkul></CreateMatkul>}></Route>
                    <Route></Route>
                </Route> */}
            </Routes>
            <Footer></Footer>
        </>
    )
}

export default MainComponents
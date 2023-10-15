import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "../components";
import {
  HomePage,
  Praktikan,
  CreatePraktikan,
  EditPraktikan,
  ListPraktikan,
  Details,
  MataKuliah,
  ListMatakuliah,
  CreateMatakuliah,
  EditMatakuliah,
  MataPraktikum,
  ListPraktikum,
  AddPraktikum,
} from "../pages";

const MainComponents = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              loginStatus={loginStatus}
              loginCbHandler={loginCbHandler}
            ></HomePage>
          }
        ></Route>
        <Route path="praktikan" element={<Praktikan></Praktikan>}>
          <Route path="" element={<ListPraktikan></ListPraktikan>}></Route>
          <Route
            path="create"
            element={<CreatePraktikan></CreatePraktikan>}
          ></Route>
          <Route path="edit">
            <Route path=":id" element={<EditPraktikan></EditPraktikan>}></Route>
          </Route>
          <Route path="details">
            <Route path=":id" element={<Details></Details>}></Route>
          </Route>
        </Route>
        <Route path="matkul" element={<MataKuliah></MataKuliah>}>
          <Route path="" element={<ListMatakuliah></ListMatakuliah>}></Route>
          <Route
            path="create"
            element={<CreateMatakuliah></CreateMatakuliah>}
          ></Route>
          <Route path="edit">
            <Route
              path=":id"
              element={<EditMatakuliah></EditMatakuliah>}
            ></Route>
          </Route>
        </Route>
        <Route path="praktikum" element={<MataPraktikum></MataPraktikum>}>
          <Route path="" element={<ListPraktikum></ListPraktikum>}></Route>
          <Route path="create" element={<AddPraktikum></AddPraktikum>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default MainComponents;

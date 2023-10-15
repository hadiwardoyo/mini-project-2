import React, { useState, useEffect } from "react";
import { addMataPraktikum } from "../../fetch/matapraktikum";
import { getMatkuls } from "../../fetch/matakuliah";
import { getPraktikans } from "../../fetch/praktikanAxios";

import { useNavigate } from "react-router-dom";
import MataKuliah from "../mataKuliah/MataKuliah";

const AddPraktikum = () => {
  const [praktikans, setPraktikans] = useState([]);
  const [matkuls, setMatkuls] = useState([]);

  useEffect(() => {
    getPraktikans((result) => {
      setPraktikans(result);
    });
  }, []);
  useEffect(() => {
    getMatkuls((result) => {
      setMatkuls(result);
    });
  }, []);

  const [form, setForm] = useState({
    mataKuliah_id: null,
    praktikan_id: null,
    kelas: "",
    hari: "",
    pukul: "",
  });
  console.log(form);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(form);
  };

  const handleSubmit = () => {
    addMataPraktikum(form);
    navigate("/praktikum");
  };

  return (
    <>
      <div className=" container p-3">
        <h2 className="text-center">Tambah Data Praktikum</h2>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Praktikan
          </label>
          <select
            class="form-select"
            onChange={handleChange}
            type="text"
            className="form-control"
            name="praktikan_id"
            placeholder="-"
          >
            <option selection=""></option>

            {praktikans.map((result) => {
              const { id, nama } = result;
              return (
                <option onChange={handleChange} value={+id}>
                  {nama}
                </option>
              );
            })}
          </select>
          <option selection=""></option>
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Mata Kuliah
          </label>
          <select
            class="form-select"
            onChange={handleChange}
            type="text"
            className="form-control"
            name="mataKuliah_id"
            placeholder="-"
          >
            <option selection=""></option>

            {matkuls.map((result) => {
              const { id, nama } = result;
              return (
                <option onChange={handleChange} value={Number(id)}>
                  {nama}
                </option>
              );
            })}
          </select>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput">Kelas</label>
          <select class="form-control" onChange={handleChange} name="kelas">
            <option selection=""></option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput">Hari</label>
          <select class="form-control" onChange={handleChange} name="hari">
            <option selection=""></option>

            <option value="Senin">Senin</option>
            <option value="Selasa">Selasa</option>
            <option value="Rabu">Rabu</option>
            <option value="Kamis">Kamis</option>
            <option value="Jumat">Jumat</option>
            <option value="Sabtu  ">Sabtu </option>
          </select>
        </div>

        <div class="mb-3">
          <label for="formGroupExampleInput   ">Pukul</label>
          <select class="form-control" onChange={handleChange} name="pukul">
            <option selection=""></option>
            <option value="07.00-9.00">07.00-9.00</option>
            <option value="09.00-11.00">09.00-11.00</option>
            <option value="11.00-13.00">11.00-13.00</option>
            <option value="13.00-15.00">13.00-15.00</option>
            <option value="15.00-17.00">15.00-17.00</option>
          </select>
        </div>

        <div>
          <button
            onClick={() => handleSubmit()}
            className="btn btn-outline-primary"
          >
            Tambah Praktikan
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPraktikum;

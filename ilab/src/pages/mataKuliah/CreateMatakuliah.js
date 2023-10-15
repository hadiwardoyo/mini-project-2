import React, { useState, useEffect } from "react";
import { addMatkul } from "../../fetch/matakuliah";
import { getJurusan } from "../../fetch/jurusan";

import { useNavigate } from "react-router-dom";

const CreateMatakuliah = () => {
  const [form, setForm] = useState({
    nama: "",
    jurusan: "",
  });

  const [jurusan, setJurusan] = useState([]);

  useEffect(() => {
    getJurusan((result) => {
      setJurusan(result);
    });
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    addMatkul(form);
    navigate("/matkul");
  };
  return (
    <div>
      <div className="container">
        <h2 className="text-center">Tambah Data Mata Kuliah</h2>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Nama Mata Kuliah
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="nama"
            placeholder="example: teknik industri"
          />
        </div>

        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Jurusan
          </label>
          <select
            class="form-select"
            onChange={handleChange}
            type="text"
            className="form-control"
            name="jurusan"
            placeholder="-"
          >
            <option selected=""></option>

            {jurusan.map((result) => {
              const { nama } = result;
              return (
                <option onChange={handleChange} value={nama}>
                  {nama}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <button
            onClick={() => handleSubmit()}
            className="btn btn-outline-primary"
          >
            Tambah Mata Kuliah
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateMatakuliah;

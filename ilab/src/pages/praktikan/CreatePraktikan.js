import React, { useState, useEffect } from "react";
import { addPraktikan } from "../../fetch/praktikanAxios";
import { useNavigate } from "react-router-dom";
import { getJurusan } from "../../fetch/jurusan";

const CreatePraktikan = () => {
  const [form, setForm] = useState({
    nim: "",
    nama: "",
    jurusan: "",
    fakultas: "",
    tahun_masuk: "",
    status: "aktif",
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
    addPraktikan(form);
    navigate("/praktikan");
  };

  return (
    <>
      <div className=" container p-3">
        <h2 className="text-center">Tambah Data Praktikan</h2>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Nim
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="nim"
            placeholder="Contoh: 123890334"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Nama
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="nama"
            placeholder="Masukan Nama Anda"
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
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Fakultas
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="fakultas"
            placeholder="Fakultas"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Tahun Masuk
          </label>
          <input
            onChange={handleChange}
            type="number"
            className="form-control"
            name="tahun_masuk"
            placeholder="Tahun Masuk"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Role
          </label>
          <select
            class="form-select"
            onChange={handleChange}
            type="text"
            className="form-control"
            name="role"
            placeholder="user/admin"
          >
            <option selected>{form.role}</option>
            <option onChange={handleChange} value="Admin">
              Admin
            </option>
            <option onChange={handleChange} value="Mahasiswa">
              Mahasiswa
            </option>
            <option onChange={handleChange} value="Dosen">
              Dosen
            </option>
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

export default CreatePraktikan;

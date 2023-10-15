import React, { useState, useEffect } from "react";
import { editPraktikan, findById } from "../../fetch/praktikanAxios";
import { useNavigate, useParams } from "react-router-dom";

const EditPraktikan = () => {
  const [form, setForm] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const getInfo = () => {
    // const { id } = params
    findById(+params.id, (result) => {
      setForm({
        nim: result.nim,
        nama: result.nama,
        jurusan: result.jurusan,
        fakultas: result.fakultas,
        tahun_masuk: result.tahun_masuk,
        status: result.status,
        role: result.role,
      });
    });
  };

  useEffect(() => {
    getInfo();
  }, []);

  const handleSubmit = () => {
    editPraktikan(+params.id, form);
    navigate("/praktikan");
  };

  return (
    <>
      <div className="container p-3">
        <h2 className="text-center">Edit Praktikan</h2>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Nim
          </label>
          <input
            value={form.nim}
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
            value={form.nama}
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
          <input
            value={form.jurusan}
            onChange={handleChange}
            type="text"
            className="form-control"
            name="jurusan"
            placeholder="Masukan Jurusan"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Fakultas
          </label>
          <input
            value={form.fakultas}
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
            value={form.tahun_masuk}
            onChange={handleChange}
            type="number"
            className="form-control"
            name="tahun_masuk"
            placeholder="Tahun Masuk"
          />
        </div>

        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Status
          </label>
          <select
            class="form-select"
            onChange={handleChange}
            type="text"
            className="form-control"
            name="status"
            placeholder="user/admin"
          >
            <option selected>{form.status}</option>
            <option onChange={handleChange} value="Aktif">
              Aktif
            </option>
            <option onChange={handleChange} value="Non Aktif">
              Non Aktif
            </option>
            <option onChange={handleChange} value="Lulus">
              Lulus
            </option>
          </select>
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Role
          </label>
          <input
            value={form.role}
            onChange={handleChange}
            type="text"
            className="form-control"
            name="role"
            placeholder="user/admin"
          />
        </div>
        <div>
          <button
            onClick={() => handleSubmit()}
            className="btn btn-outline-primary"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </>
  );
};

export default EditPraktikan;

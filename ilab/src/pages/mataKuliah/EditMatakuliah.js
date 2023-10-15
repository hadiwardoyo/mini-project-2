import React, { useState, useEffect } from "react";
import { editMatkul, findById } from "../../fetch/matakuliah";
import { useNavigate, useParams } from "react-router-dom";

const EditMatakuliah = () => {
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
        nama: result.nama,
        jurusan: result.jurusan,
        tahun_akademik: result.tahun_akademik,
        semester_akademik: result.semester_akademik,
      });
    });
  };

  useEffect(() => {
    getInfo();
  }, []);

  const handleSubmit = () => {
    editMatkul(+params.id, form);
    navigate("/matkul");
  };

  return (
    <>
      <div className="container p-3">
        <h2 className="text-center">Edit Praktikan</h2>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Nama Matkul
          </label>
          <input
            value={form.nama}
            onChange={handleChange}
            type="text"
            className="form-control"
            name="nama"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            jurusan
          </label>
          <input
            value={form.jurusan}
            onChange={handleChange}
            type="text"
            className="form-control"
            name="jurusan"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Tahun Akademik
          </label>
          <input
            value={form.tahun_akademik}
            onChange={handleChange}
            type="text"
            className="form-control"
            name="tahun_akademik"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Semester Akademik
          </label>
          <input
            value={form.semester_akademik}
            onChange={handleChange}
            type="text"
            className="form-control"
            name="semester_akademik"
            placeholder="Fakultas"
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

export default EditMatakuliah;

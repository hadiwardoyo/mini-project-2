import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMatkuls, deleteMatkul } from "../../fetch/matakuliah";
import { Loading } from "../../components";

const ListPraktikan = () => {
  const [matkuls, setMatkuls] = useState([]);

  useEffect(() => {
    getMatkuls((result) => {
      setMatkuls(result);
    });
  }, []);

  const deleteHandler = (id) => {
    deleteMatkul(id);
    const newMatkuls = matkuls.filter((p) => p.id !== id);
    setMatkuls(newMatkuls);
  };

  return (
    <>
      <div>
        <div className="col-9 mx-auto">
          <div className="w-100">
            <Link
              to="/matkul/create"
              className="btn btn-sm btn-outline-primary mb-3"
            >
              Tambah Mata Kuliah
            </Link>
          </div>
          <div className="w-100">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Mata Kuliah</th>
                  <th>Jurusan</th>
                  <th>Tahun Semester Akademik</th>
                  <th>jumlah peserta</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {matkuls.length > 0 ? (
                  matkuls.map((matkul, index) => {
                    const {
                      id,
                      nama,
                      jurusan,
                      tahun_akademik,
                      semester_akademik,
                      jumlah_peserta,
                    } = matkul;
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{nama}</td>
                        <td>{jurusan}</td>
                        <td>
                          <div className="row">
                            <div className="col-9">
                              <h5>{tahun_akademik}</h5>
                              <small className="badge bg-info">
                                {semester_akademik}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>{jumlah_peserta}</td>

                        <td>
                          <Link
                            to={`/matkul/edit/${id}`}
                            className="btn btn-sm btn-outline-success"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteHandler(+id)}
                            className="btn btn-sm btn-outline-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <Loading />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPraktikan;

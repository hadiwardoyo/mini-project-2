import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getMataPraktikum,
  deleteMataPraktikum,
} from "../../fetch/matapraktikum";
import { Loading } from "../../components";

const ListPraktikum = () => {
  const [praktikums, setPraktikums] = useState([]);

  useEffect(() => {
    getMataPraktikum((result) => {
      setPraktikums(result);
    });
  }, []);

  const deleteHandler = (id1, id2) => {
    deleteMataPraktikum(id1, id2);
    const newPraktikum1 = praktikums.filter((p) => p.praktikum_id !== id2);
    const newPraktikum = newPraktikum1.filter((p) => p.mataKuliah_id !== id1);

    setPraktikums(newPraktikum);
  };

  return (
    <>
      <div>
        <div className="col-9 mx-auto">
          <div className="w-100">
            <Link
              to="/praktikum/create"
              className="btn btn-sm btn-outline-primary mb-3"
            >
              Tambah Mata Praktikum
            </Link>
          </div>
          <div className="w-100">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Mata Kuliah</th>
                  <th>Nama Praktikum</th>
                  <th>Kelas</th>
                  <th>Hari</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {praktikums.length > 0 ? (
                  praktikums.map((matprak, index) => {
                    const {
                      kelas,
                      hari,
                      pukul,
                      mataKuliah,
                      praktikan,
                      praktikan_id,
                      mataKuliah_id,
                    } = matprak;

                    return (
                      <tr key={mataKuliah.id}>
                        <td>{index + 1}</td>
                        <td>{mataKuliah.nama}</td>
                        <td>{praktikan.nama}</td>
                        <td>{kelas}</td>
                        <td>
                          <h5>{hari}</h5>
                          <small className="btn btn-primary btn-sm">
                            {pukul}
                          </small>
                        </td>
                        <td>
                          {/* <Link
                            to={`/praktikan/edit/${mataKul}`}
                            className="btn btn-sm btn-outline-success"
                          >
                            Edit
                          </Link> */}
                          <button
                            onClick={() =>
                              deleteHandler(mataKuliah_id, praktikan_id)
                            }
                            className="btn btn-sm btn-outline-danger"
                          >
                            Delete
                          </button>
                          <Link
                            to={`#`}
                            className="btn btn-sm btn-outline-warning"
                          >
                            Detail
                          </Link>
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

export default ListPraktikum;

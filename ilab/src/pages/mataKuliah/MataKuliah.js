import React, { useState, useEffect } from "react";
import { getMatkuls } from "../../fetch/matakuliah";

const MataKuliah = () => {
  const [matkul, setMatkul] = useState([]);

  useEffect((result) => {
    getMatkuls((result) => console.log(result));
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Mata Kuliah Page</h1>
      </div>
      <h1></h1>
    </div>
  );
};

export default MataKuliah;

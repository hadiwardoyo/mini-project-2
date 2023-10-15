import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const MataKuliah = () => {
  return (
    <div className="my-3">
      <div className="col-6 mx-auto">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Cari mata kuliah"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            cari
          </button>
        </form>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default MataKuliah;

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const MataPraktikum = () => {
  return (
    <div className="my-3">
      <div className="col-6 mx-auto">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Cari Mata Praktikum"
            aria-label="Search"
          />
          <button className="btn btn-outline-danger" type="submit">
            cari
          </button>
        </form>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default MataPraktikum;

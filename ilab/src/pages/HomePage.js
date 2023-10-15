import React from "react";
import "./style/style.css";
import { Text } from "../components";

const HomePage = (props) => {
  const { loginStatus, loginCbHandler } = props;
  return (
    <div>
      <div className="container">
        <div>
          <div className="p-3">
            <div className="row">
              <div className="col-6 my-auto">
                <h1>
                  Selamat Datang <br></br>
                  <strong>
                    <Text></Text>
                  </strong>
                </h1>
                <p>
                  iLab menyediakan Layanan management untuk kegiatan belajar
                  pada universitas
                </p>
                <p>Sudah Siap untuk Mencoba ?</p>
                <button className="btn btn-outline-primary">
                  Mari kita mulai
                </button>
              </div>
              <div className="col-6">
                <img
                  src="https://img.freepik.com/free-vector/college-project-concept-illustration_114360-13751.jpg?w=826&t=st=1697359596~exp=1697360196~hmac=97de00a3f603af725c89f4dc662f9684eb7b43dae60dbf1a6375cdc7d1ce195a"
                  className="img-fluid"
                  alt="learning group"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div>
            <h2 className="mb-3">
              <strong>Teknologi yang kami gunakan</strong>
            </h2>
          </div>

          <div className="col-3 ">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                className="card-shadow p-3 mb-5 bg-body-tertiary roundedimg-top img-tech"
                alt="react"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">React</h5>
                <p className="card-text">
                  React.js adalah sebuah pustaka JavaScript yang digunakan untuk
                  membangun antarmuka pengguna. React.js memungkinkan kita untuk
                  membuat komponen UI yang dapat digunakan kembali. React.js
                  juga cocok untuk membuat aplikasi satu halaman yang dinamis
                  dan responsif
                </p>
              </div>
            </div>
          </div>

          <div className="col-3 ">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/bootstrap5.jpeg?itok=wkBtyvSM"
                className="card-img-top img-tech"
                alt="react"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">Bootstrap</h5>
                <p className="card-text">
                  Bootstrap adalah sebuah pustaka CSS yang digunakan untuk
                  mempermudah pengembangan web. Bootstrap menyediakan berbagai
                  macam komponen UI yang sudah siap pakai, seperti grid system,
                  navbar, button, card, modal, dan lain-lain
                </p>
              </div>
            </div>
          </div>

          <div className="col-3 ">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png"
                className="card-img-top img-tech"
                alt="react"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">node js</h5>
                <p className="card-text">
                  Node.js adalah sebuah lingkungan runtime JavaScript yang
                  bersifat open-source dan cross-platform. Node.js memungkinkan
                  kita untuk menjalankan kode JavaScript di luar browser,
                  seperti di server atau desktop.
                </p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/1280px-Axios_%28computer_library%29_logo.svg.png"
                className="card-img-top img-tech"
                alt="react"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">Axios</h5>
                <p className="card-text">
                  Axios adalah sebuah pustaka JavaScript yang digunakan untuk
                  melakukan permintaan HTTP dari browser atau node.js. Axios
                  mendukung fitur-fitur seperti promise API, interceptors,
                  transformasi data, pembatalan permintaan, dan penanganan JSON
                  secara otomatis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdC6sZnAYDXMiAgFojLYrsUNBTbzuGNEHTsh2s_grWtICZ_91cnbNCSDE2SvgBWlVhVo&usqp=CAU"
                className="card-img-top img-tech"
                alt="react"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">
                  Sweet Alert 2
                </h5>
                <p className="card-text">
                  Sweet Alert 2 adalah sebuah pustaka JavaScript yang digunakan
                  untuk membuat kotak popup yang indah, responsif, dapat
                  dikustomisasi, dan dapat diakses (WAI-ARIA).
                </p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="https://www.loginradius.com/blog/static/a53096b6796dd3d1e3f3df8bc77a6689/03979/index.png"
                className="card-img-top img-tech"
                alt="react"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">
                  React router dom
                </h5>
                <p className="card-text">
                  React router dom adalah sebuah paket yang berisi binding untuk
                  menggunakan React Router di aplikasi web. React Router adalah
                  sebuah pustaka yang memungkinkan kita untuk membuat routing
                  yang deklaratif dan dinamis di aplikasi React.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                className="card-img-top img-tech"
                alt="react"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">PostgreSQL</h5>
                <p className="card-text">
                  PostgreSQL adalah sebuah sistem manajemen basis data
                  relasional objek yang bersumber terbuka dan memiliki fitur
                  yang sangat lengkap.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="text-center">
            <h1>
              <strong>Testimoni</strong>
            </h1>
          </div>

          <div className="row">
            <div className="col-4 mb-5">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-center">Pak Dobleh</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Pengusaha bakso
                  </h6>
                  <p class="card-text">
                    Berhasil membuat kios depan jembatan yang menyebabkan
                    kecelakaan beruntul sepanjang 12km
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4 mb-5">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-center">Nurmi</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    influ encer
                  </h6>
                  <p class="card-text">
                    Dapat menghasilkan 12jt perbulan dengan jualan batu akik
                    dengan cara menipu korban yang ingin membeli
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4 mb-5">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-center">Mark</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Tukang Ojek pengkolan
                  </h6>
                  <p class="card-text">
                    Berhasil membangun perusahaan teknologi dengan nilai valuasi
                    5T dimana dimodalin ortu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

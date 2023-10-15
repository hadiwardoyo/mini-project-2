import React from "react";
import "./style/style.css";

const HomePage = (props) => {
  const { loginStatus, loginCbHandler } = props;
  return (
    <div>
      <div className="container">
        <div>
          <div className="p-3">
            <div className="row">
              <div className="col-6 my-auto">
                <h1>Selamat Datang Di iLab</h1>
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
            <h2 className="mb-3">Teknologi yang kami gunakan</h2>
          </div>

          <div className="col-3 ">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                className="card-shadow p-3 mb-5 bg-body-tertiary roundedimg-top img-tech"
                alt="react"
              />
              <div className="card-body">
                <h5 className="card-title">react</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                <h5 className="card-title">Bootstrap</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                <h5 className="card-title">node js</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="data:image/png;base64,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"
                className="card-img-top img-tech"
                alt="react"
              />
              <div className="card-body">
                <h5 className="card-title">Axios</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                <h5 className="card-title">React router dom</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div>
            <h1>Testimoni</h1>
          </div>

          <div className="row">
            <div className="col-4 mb-5">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Pak Dobleh</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Pengusaha
                  </h6>
                  <p class="card-text">
                    Berhasil membuat kios depan jembatan yang menyebabkan
                    kecelakaan beruntul sepanjang 12km
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4 mb-5">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Nurmi</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    influ encer
                  </h6>
                  <p class="card-text">
                    Dapat menghasilkan 12jt perbulan dengan jualan batu akik
                    dengan cara menipu korban yang ingin membeli
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4 mb-5">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Mark</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Tukang Ojek pengkolan
                  </h6>
                  <p class="card-text">
                    Berhasil membangun perusahaan teknologi dengan nilai valuasi
                    5T dimana dimodalin ortu
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
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

const { praktikan, mataPraktikum, mataKuliah, jurusan } = require("../models");
const { generateToken } = require('../helper/jwt')
const { decryptPWD } = require('../helper/bcrypt')

class PraktikanController {
  static async getPraktikan(req, res) {
    try {
      let praktikans = await praktikan.findAll({
        order: [["id", "asc"]],
      });
      res.json(praktikans);
    } catch (err) {
      res.json(err);
    }
  }

  static async login(req, res) {
    try {
      const { nim, nama } = req.body

      const found = await praktikan.findOne({
        where: {
          nama: nama
        }
      })

      // console.log(found.dataValues.id)

      if (!found) return res.status(404).json({ message: 'praktikan tidak ditemukan' })

      const match = decryptPWD(nim, found.nim)
      if (!match) return res.status(400).json({ message: 'mohon masukan nim dengan benar' })

      const access_token = generateToken(found.dataValues)
      res.cookie('token', access_token)
      res.status(200).json({ access_token: access_token })
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async logout(req, res) {
    try {
      res.clearCookie('token')
      res.status(200).json({ message: 'logout successfully' })
    } catch (e) {
      res.status(500).json(e)
    }
  }



  static async add(req, res) {
    try {
      const { nim, nama, jurusan, fakultas, tahun_masuk, role } = req.body;

      let results = await praktikan.create({
        nim,
        nama,
        jurusan,
        fakultas,
        tahun_masuk,
        role
      });

      res.status(201).json({ message: 'praktikan berhasil ditambahkan' })
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      let id = req.params.id;

      let praktikans = await praktikan.destroy({
        where: {
          id,
        },
      });

      praktikans === 1
        ? res.status(200).json({ message: 'praktikan berhasil di hapus' })
        : res.json(`${id} not found`);
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      let id = req.params.id;
      const { nim, nama, jurusan, fakultas, tahun_masuk, status } = req.body;
      let results = await praktikan.update(
        {
          nim,
          nama,
          jurusan,
          fakultas,
          tahun_masuk,
          status,
        },
        { where: { id } }
      );
      results[0] === 1
        ? res.status(200).json({ message: 'praktikan berhasil di update' })
        : res.json({
          message: `praktikan id: ${id} does not exist`,
        });
    } catch (err) {
      res.json(err);
    }
  }

  static async viewMatkul(req, res) {
    try {
      let id = +req.params.id;
      let result = await mataPraktikum.findAll({
        where: { praktikan_id: id },
        include: [praktikan, mataKuliah],
      });
      let praktikans = await praktikan.findByPk(id);
      if (result.length !== 0) {
        let matkuls = result.map((el) => {
          return el.mataKuliah.dataValues || {};
        });
        let kelas = result.map((el) => {
          return el.dataValues.kelas;
        });

        let resultMatapraktikum = {
          kelas,
          ...result[0].praktikan.dataValues,
          matkuls,
        };

        res.status(200).json({ result: resultMatapraktikum, praktikans, });
      } else {
        let resultMatapraktikum = {
          matkuls: [],
        };
        res.status(200).json({ result: resultMatapraktikum, praktikans });
      }
    } catch (err) {
      res.json({
        err: err.message,
        message: "id tidak dapat ditemukan",
      });
    }
  }
}

module.exports = PraktikanController;

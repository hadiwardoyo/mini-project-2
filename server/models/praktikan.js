"use strict";

const { encryptPWD } = require('../helper/bcrypt')
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class praktikan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      praktikan.belongsToMany(models.mataKuliah, {
        through: models.mataPraktikum,
        foreignKey: "praktikan_id",
      });
    }
  }
  praktikan.init(
    {
      nim: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "NIM cannot be empty",
          },
        },
      },
      nama: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "nama cannot be empty",
          },
        },
      },
      jurusan: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "jurusan cannot be empty",
          },
        },
      },
      fakultas: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "fakultas cannot be empty",
          },
        },
      },
      tahun_masuk: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "tahun_masuk cannot be empty",
          },
        },
      },
      status: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            message: 'silahkan masukan role anda'
          }
        }
      }
    },
    {
      hooks: {
        beforeCreate: function (praktikan, option) {
          praktikan.status = "aktif";
          praktikan.nim = encryptPWD(praktikan.nim)
        },
      },
      sequelize,
      modelName: "praktikan",
    }
  );
  return praktikan;
};

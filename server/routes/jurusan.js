const jurusanRoute = require("express").Router();
const { JurusanController } = require("../controllers");
const { verifyToken } = require('../middleware/authentication')

jurusanRoute.get("/data", verifyToken, JurusanController.getJurusan);

jurusanRoute.post("/add", verifyToken, JurusanController.add);

jurusanRoute.delete("/delete/:id", verifyToken, JurusanController.delete);

jurusanRoute.put("/update/:id", verifyToken, JurusanController.update);
module.exports = jurusanRoute;

const jurusanRoute = require("express").Router();
const { JurusanController } = require("../controllers");

jurusanRoute.get("/data", JurusanController.getJurusan);

jurusanRoute.post("/add", JurusanController.add);

jurusanRoute.delete("/delete/:id", JurusanController.delete);

jurusanRoute.put("/update/:id", JurusanController.update);
module.exports = jurusanRoute;

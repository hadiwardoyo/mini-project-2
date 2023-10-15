const matkulRoute = require("express").Router();
const { MataKuliahController } = require("../controllers");
const { verifyToken, isAdmin } = require("../middleware/authentication");

matkulRoute.get("/data", verifyToken, MataKuliahController.getMatkul);

matkulRoute.get("/details/:id", verifyToken, MataKuliahController.getById);

matkulRoute.post("/add", verifyToken, MataKuliahController.add);

matkulRoute.delete("/delete/:id", verifyToken, MataKuliahController.delete);

matkulRoute.put("/update/:id", verifyToken, MataKuliahController.update);
module.exports = matkulRoute;

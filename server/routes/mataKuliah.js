const matkulRoute = require("express").Router();
const { MataKuliahController } = require("../controllers");
const { verifyToken, isAdmin } = require("../middleware/authentication");

matkulRoute.get("/data", verifyToken, MataKuliahController.getMatkul);

matkulRoute.post("/add", verifyToken, isAdmin, MataKuliahController.add);

matkulRoute.delete(
  "/delete/:id",
  verifyToken,
  isAdmin,
  MataKuliahController.delete
);

matkulRoute.put(
  "/update/:id",
  verifyToken,
  isAdmin,
  MataKuliahController.update
);
module.exports = matkulRoute;

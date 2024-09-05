const express = require("express");
const route = express();
route.use(express.json());
const multer = require("multer");
const path = require("path");
route.use("/product", express.static("public/images"));
const {productController} = require("../controllers/productController");
const {allProduct}=require("../controllers/productController")


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images"), (error, success) => {
      if (error) throw error;
    });
  },
  filename: (req, file, cb) => {
    const name = file.originalname.split(" ").join("-");
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

route.post("/product", upload.single("image"), productController);
route.get("/product",allProduct)


module.exports = route;

const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", {
    prods: adminData.products,
    pageTitle: "My Webpage",
    path: "/",
  });
});

module.exports = router;

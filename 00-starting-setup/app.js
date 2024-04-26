const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "pug"); //tells we want to use 'pug' templating engine
app.set("views", "views"); //where to find pug files

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);

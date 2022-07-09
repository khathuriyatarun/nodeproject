const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const { connectDB } = require("./utils/database");

const userRoutes = require('./routes/users');
const companyRoutes = require('./routes/company');
const roleRoutes = require('./routes/role');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/users", userRoutes);
app.use("/company", companyRoutes);
app.use("/role", roleRoutes);

connectDB();
app.listen(8081);
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: "./config/.env.local" });

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
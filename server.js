require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const TestModel = require("./model/TestModel");

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Erreur MySQL :", err.message);
    process.exit(1);
  } else {
    console.log("Connecté à la base distante.");
  }
});

const testModel = new TestModel(db);

// Importer les routes en passant la connexion db
const testRoutes = require("./routes/test")(db);
app.use("/test", testRoutes);

// gestion des erreurs
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`API en écoute sur http://localhost:${PORT}`);
});

// models/test.js
const { DataTypes } = require("sequelize");
const sequelize = require("./index");

module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    "Test",
    {
      nom: { type: DataTypes.STRING, allowNull: false },
      age: { type: DataTypes.INTEGER, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
    },
    {
      freezeTableName: true, // <- IMPORTANT : empêche la pluralisation automatique
      tableName: "test", // <- optionnel, tu peux préciser explicitement
      timestamps: false, // <- si tu n’as pas les colonnes createdAt/updatedAt
    }
  );

  return Test;
};

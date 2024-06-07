import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Author = sequelize.define("Author", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  verified: { type: DataTypes.BOOLEAN, allowNull: false },
});

export default Author;

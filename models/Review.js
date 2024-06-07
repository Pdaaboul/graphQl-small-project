import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Author from "./Author.js";
import Game from "./Game.js";

const Review = sequelize.define("Review", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rating: { type: DataTypes.INTEGER, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  author_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Author,
      key: "id",
    },
  },
  game_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Game,
      key: "id",
    },
  },
});

Review.belongsTo(Author, { foreignKey: "author_id" });
Review.belongsTo(Game, { foreignKey: "game_id" });

export default Review;

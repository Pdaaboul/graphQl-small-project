
import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Game = sequelize.define('Game', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  platform: { type: DataTypes.JSON, allowNull: false },
}, {
  timestamps: false,
});

export default Game;


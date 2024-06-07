// db.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('graphql_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;

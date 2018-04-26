// src/instances/sequelize.ts
import * as Sequelize from 'sequelize';

const db = 'expressapp';
const username = 'root';
const password = 'root';

export const sequelize = new Sequelize(db, username, password, {
  dialect: 'postgres',
  port: 3306,
});

sequelize.authenticate();

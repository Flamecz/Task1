import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('todo_list', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;

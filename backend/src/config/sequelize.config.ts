import { Sequelize } from 'sequelize';
import appEnvironmentVariables from './app-environment-variables.config';

const sequelize = new Sequelize(appEnvironmentVariables.databaseURI, {
  dialect: 'postgres',
  logging: () =>
    appEnvironmentVariables.nodeEnvironment === 'dev' ? true : false,
});

export default sequelize;

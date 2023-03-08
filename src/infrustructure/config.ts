import { POSTGRES_DATABASE, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USERNAME } from 'conf'
import { Sequelize } from 'sequelize'

const sequelizeConnection = new Sequelize(POSTGRES_DATABASE, POSTGRES_USERNAME, POSTGRES_PASSWORD, {
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  dialect: 'postgres',
  logging: false,

})
export default sequelizeConnection

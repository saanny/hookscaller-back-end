import { POSTGRES_DATABASE, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_USERNAME } from 'conf'
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'



const sequelizeConnection = new Sequelize(POSTGRES_DATABASE, POSTGRES_USERNAME, POSTGRES_PASSWORD, {
  host: POSTGRES_HOST,
  dialect: 'postgres',
  logging: false,
})

export default sequelizeConnection

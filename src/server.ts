import 'reflect-metadata'
import dotenv from 'dotenv'
import App from './app'
import { PORT } from './conf'
import "@Components/hooksCaller/Controller"
import Scheduler from '@Services/Scheduler/Scheduler'
import dbInit from 'infrustructure/init'

dotenv.config()
dbInit()

const scheduler: Scheduler = new Scheduler()
scheduler.start()

const port = Number(PORT)
const application = new App(port)
application.start()


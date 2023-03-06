import HooksCaller from '@Components/hooksCaller/Model'
import dotenv from 'dotenv'

dotenv.config()

const dbInit = () => {
  HooksCaller.sync({
    // alter:
    //   process.env.NODE_ENV === 'development' || process.env.NODE_ENV !== 'test',
  })
}
export default dbInit

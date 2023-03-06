import cron from 'node-cron'
import { HooksCallerExpireChecker } from './providers/HooksCallerExpireChecker';

export default class Scheduler {
    public start(): void {
        cron.schedule('*/10 * * * * *', async () => {
            try {
                await HooksCallerExpireChecker();
            } catch (err) {
                console.log(err)
            }
        })
    }
}
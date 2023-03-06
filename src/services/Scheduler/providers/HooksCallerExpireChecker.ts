import HooksCaller, { HookCallerStatus, IHooksCaller } from "@Components/hooksCaller/Model";
import axios from 'axios'
import moment from "moment";
import { Op } from 'sequelize';

const updateTimer = async (id) => {
    await HooksCaller.update({
        status: HookCallerStatus.SENT
    }, {
        where: {
            id: id
        }
    })
}
const transaction = (timer) => new Promise(async (resolve, reject) => {
    try {
        await axios.post(`${timer.webhookUrl}${timer.id}`, {})

        await updateTimer(timer.id);
        resolve(`request for timer with id:${timer.id} sent`);

    } catch (error) {
        await updateTimer(timer.id);
        reject(`request for timer with id:${timer.id} faced with error`);

    }

})

export async function HooksCallerExpireChecker() {
    const currentDate = moment().tz("Asia/Tehran").toDate();


    const timers: Array<IHooksCaller> = await HooksCaller.findAll({
        where:
        {
            [Op.and]: [{
                date: { [Op.lt]: currentDate }
            }, {
                status: HookCallerStatus.INPROGRESS
            }]


        }
    });

    for await (let timer of timers) {
        await transaction(timer)

    }

}
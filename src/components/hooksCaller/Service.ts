import { CreateDTO } from './dto/createDTO'
import HooksCaller, { HookCallerStatus, IHooksCaller, IHooksCallerTransformer } from './Model';
import { injectable } from 'inversify'
import moment from "moment-timezone";

@injectable()
export default class HooksCallerService {

    public async createOne(data: CreateDTO): Promise<{ id: number }> {
        const dateTarget = moment().add(data.seconds, "seconds").add(data.minutes, "minutes").add(data.hours, "hours").tz("Asia/Tehran").toDate();

        const hooksCaller = await HooksCaller.create({
            date: dateTarget,
            webhookUrl: data.webhookUrl
        })

        return {
            id: hooksCaller.id
        }
    }
    public async findOneById(id: string) {
        const hookCaller = await HooksCaller.findOne({
            where: {
                id
            }
        });
        if (moment(hookCaller.date).isBefore(moment())) {
            return 0
        } else {
            const date = moment(hookCaller.date).fromNow();
            return date;
        }

    }
    public async findAll(): Promise<Array<IHooksCallerTransformer>> {
        const hookCallers: Array<IHooksCaller> = await HooksCaller.findAll({
            where: {
                status: HookCallerStatus.INPROGRESS
            }
            ,
            raw: true
        });
        const changeSchema = hookCallers.map((item) => {
            return {
                id: item.id,
                status: item.status,
                webhookUrl: item.webhookUrl,
                date: moment(item.date).fromNow()
            } as IHooksCallerTransformer
        })
        return changeSchema
    }
}
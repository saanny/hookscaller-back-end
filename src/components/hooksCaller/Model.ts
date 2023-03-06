import sequelizeConnection from 'infrustructure/config'
import { Model, Optional, DataTypes } from 'sequelize'

export enum HookCallerStatus {
    SENT = "SENT",
    INPROGRESS = "INPROGRESS"
}
export interface IHooksCallerTransformer {
    id: number
    date: string
    status: HookCallerStatus;
    webhookUrl: string;
}
export interface IHooksCaller {
    id: number
    date: Date
    status: HookCallerStatus;
    webhookUrl: string;
}
export interface IHooksCallerInput extends Optional<IHooksCaller, 'id'> { }

export interface IHooksCallerOuput extends Required<IHooksCaller> { }

class HooksCaller
    extends Model<IHooksCallerOuput, IHooksCallerInput>
    implements IHooksCaller {
    public status: HookCallerStatus;
    public id!: number
    public date!: Date
    public webhookUrl: string;

}
HooksCaller.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        webhookUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM("INPROGRESS", "SENT"),
            defaultValue: "INPROGRESS",
        }
    },
    {
        tableName: 'hookscaller',
        timestamps: false,
        sequelize: sequelizeConnection,
        paranoid: true,
    }
)
export default HooksCaller

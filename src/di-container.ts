import HooksCallerService from '@Components/hooksCaller/Service'
import { Container } from 'inversify'

export const container = new Container({
    defaultScope: 'Singleton',
})

container.bind(HooksCallerService).toSelf()
import { inputValidator } from "@Utils/InputValidator";
import { NextFunction, Request, Response } from "express";
import { controller, httpGet, httpPost } from "inversify-express-utils";
import HooksCallerService from "./Service";
import { inputCreateItem, inputGetItem } from "./validationSchema";

@controller('/api/v1/hooks-caller')
export class HooksCallerController {

    constructor(private hooksCallerService: HooksCallerService) { }

    @httpPost("/", inputValidator(inputCreateItem))
    public async createOne(req: Request, res: Response, next: NextFunction) {
        const { hours, minutes, seconds, webhookUrl } = req.body;

        const { id } = await this.hooksCallerService.createOne({
            hours,
            minutes,
            seconds,
            webhookUrl
        });

        res.status(201).send({
            id
        })
    }


    @httpGet('/:id', inputValidator(inputGetItem))
    public async getOneById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const hooksCaller = await this.hooksCallerService.findOneById(id);

        res.status(200).send({
            hooksCaller
        })
    }


    @httpGet('/')
    public async getAll(req: Request, res: Response, next: NextFunction) {
        const hooksCallers = await this.hooksCallerService.findAll();

        res.status(200).send({
            hooksCallers
        })
    }

}
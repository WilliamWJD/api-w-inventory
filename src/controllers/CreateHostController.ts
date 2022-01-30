import { Request, Response } from "express";
import { CreateHostService } from "../services/CreateHostService";

class CreateHostController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { patrimony, hostname, model, department, group, user } = req.body

        const createHostService = new CreateHostService();

        try {
            const host = await createHostService.execute({
                patrimony,
                hostname,
                model,
                department,
                group,
                user
            })

            return res.status(201).json(host)
        } catch (err) {
            return res.status(401).json({ error: err })
        }
    }
}

export { CreateHostController }
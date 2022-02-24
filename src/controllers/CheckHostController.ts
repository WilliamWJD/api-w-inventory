import { Request, Response } from "express";
import { CheckHostService } from "../services/CheckHostService";

class CheckHostController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { patrimony } = req.params

        const checkHostService = new CheckHostService();

        try {
            const host = await checkHostService.execute({
                patrimony: Number(patrimony)
            })

            return res.status(201).json(host)
        } catch (err) {
            return res.status(401).json({ error: err })
        }
    }
}

export { CheckHostController }
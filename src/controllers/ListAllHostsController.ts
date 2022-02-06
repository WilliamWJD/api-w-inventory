import { Request, Response } from "express";
import { ListAllHostsService } from "../services/ListAllHostsService";

class ListAllHostsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listAllHotsService = new ListAllHostsService();
        const hosts = await listAllHotsService.execute();
        return res.status(201).json(hosts)
    }
}

export { ListAllHostsController }
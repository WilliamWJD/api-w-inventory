import { Request, Response } from "express";
import { ImportHostsService } from "../services/ImportHostsService";

class ImportHostsController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const importHostsService = new ImportHostsService();

            if (req.file) {
                await importHostsService.execute({
                    path: req.file?.path
                })
            }

            return res.status(201).json({ message: 'Dados importados com sucesso' })
        } catch (err: any) {
            console.log(err)
            return res.status(401).json({ error: 'Erro ao importar arquivo' })
        }
    }
}

export { ImportHostsController }
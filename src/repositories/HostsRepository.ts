import { Hosts } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";
import IHost from "../dtos/IHost";

class HostsRepository {
    async store(data: IHost): Promise<Hosts> {
        const host = await prismaClient.hosts.create({
            data: data
        })

        return host;
    }
}

export { HostsRepository }
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

    async importHosts(data: IHost[]): Promise<void> {
        await prismaClient.hosts.createMany({
            data: data
        })
    }

    async listAll(): Promise<Hosts[]> {
        const hosts = await prismaClient.hosts.findMany();
        return hosts;
    }
}

export { HostsRepository }
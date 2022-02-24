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
        const hosts = await prismaClient.hosts.createMany({
            data: data
        })
    }

    async listAll(): Promise<Hosts[]> {
        const hosts = await prismaClient.hosts.findMany();
        return hosts;
    }

    async findHostById(patrimony: number): Promise<Hosts | undefined> {
        const host = await prismaClient.hosts.findFirst({
            where: {
                patrimony: patrimony
            }
        })

        return host || undefined;
    }

    async checkHost(patrimony: number): Promise<Hosts> {
        const host = await prismaClient.hosts.update({
            where: {
                patrimony: patrimony
            },
            data: {
                status: true
            }
        })

        return host
    }
}

export { HostsRepository }
import { Hosts } from "@prisma/client";

import { HostsRepository } from "../repositories/HostsRepository"

interface IHost {
    patrimony: number;
    hostname: string;
    model: string;
    department: string;
    group: string;
    user: string;
    status?: string;
    updated_at?: Date
}

class CreateHostService {
    async execute(data: IHost): Promise<Hosts> {
        const hostsRepository = new HostsRepository();

        const hostData = data;
        hostData.updated_at = new Date();

        const host = await hostsRepository.store(hostData);
        return host;
    }
}

export { CreateHostService }
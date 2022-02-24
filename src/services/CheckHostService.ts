import { Hosts } from "@prisma/client";
import { HostsRepository } from "../repositories/HostsRepository";

interface IRequest {
    patrimony: number;
}

class CheckHostService {
    async execute({ patrimony }: IRequest): Promise<Hosts> {
        const hostsRepository = new HostsRepository();

        const checkHostExists = await hostsRepository.findHostById(patrimony);

        if (!checkHostExists) {
            throw new Error("Host is not found")
        }

        const host = await hostsRepository.checkHost(patrimony);

        return host;
    }
}

export { CheckHostService }
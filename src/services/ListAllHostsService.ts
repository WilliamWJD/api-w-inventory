import { Hosts } from "@prisma/client";
import { HostsRepository } from "../repositories/HostsRepository";

class ListAllHostsService {
    async execute(): Promise<Hosts[]> {
        const hostsRepository = new HostsRepository();
        const hosts = await hostsRepository.listAll();
        return hosts;
    }
}

export { ListAllHostsService }
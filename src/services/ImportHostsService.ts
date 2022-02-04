import { HostsRepository } from '../repositories/HostsRepository';
import { ConvertPlanHostsToJson } from '../utils/ConvertPlanHostsToJson';

interface IRequest {
    path: string;
}

class ImportHostsService {
    async execute({ path }: IRequest): Promise<void> {
        const hostsToJson = ConvertPlanHostsToJson(path);
        const hostsRepository = new HostsRepository();
        await hostsRepository.importHosts(hostsToJson)
        return;
    }
}

export { ImportHostsService }
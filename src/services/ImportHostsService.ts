import IHost from '../dtos/IHost';
import { HostsRepository } from '../repositories/HostsRepository';
import { ConvertPlanHostsToJson } from '../utils/ConvertPlanHostsToJson';

interface IRequest {
    path: string;
}

class ImportHostsService {
    async execute({ path }: IRequest): Promise<void> {
        const hostsToJson = ConvertPlanHostsToJson(path);
        const hostsRepository = new HostsRepository();

        let otherHosts = await hostsRepository.listAll()

        const hostsNotInclused = hostsToJson.filter((host: IHost) => !otherHosts.find((otherHost: any) => otherHost.patrimony === host.patrimony))

        await hostsRepository.importHosts(hostsNotInclused)

        return;
    }
}

export { ImportHostsService }
import IHost from '../dtos/IHost';
import { HostsRepository } from '../repositories/HostsRepository';
import { ConvertPlanHostsToJson } from '../utils/ConvertPlanHostsToJson';
import _ from 'lodash';


interface IRequest {
    path: string;
}

class ImportHostsService {
    async execute({ path }: IRequest): Promise<void> {
        const hostsToJson = ConvertPlanHostsToJson(path);
        const hostsRepository = new HostsRepository();

        const otherHosts = await hostsRepository.listAll();

        // await hostsRepository.importHosts(hostsToJson)
        return;
    }
}

export { ImportHostsService }
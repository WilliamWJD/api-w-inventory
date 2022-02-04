import { ConvertPlanHostsToJson } from '../utils/ConvertPlanHostsToJson';

interface IRequest {
    path: string;
}

class ImportHostsService {
    execute({ path }: IRequest) {
        const hostsToJson = ConvertPlanHostsToJson(path);
        console.log(hostsToJson)
        return;
    }
}

export { ImportHostsService }
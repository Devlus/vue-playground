import { AnotherService, DumbService } from './services';


export const servicesFactories = {
    dumb: () => new DumbService(),
    another: () => new AnotherService(),
};
import { Service } from '../syringe';

@Service
export class DumbService {
    constructor() {
    }
    public DoSomething() {
        return 123;
    }
}
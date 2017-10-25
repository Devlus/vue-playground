import { Service } from '../syringe';

@Service
export class AnotherService {
    constructor() {
    }
    public DoSomething() {
        return false;
    }
}
import { Service } from 'vue-di-attributes';

@Service
export class AnotherService {
    constructor() {
    }
    public DoSomething() {
        return false;
    }
}
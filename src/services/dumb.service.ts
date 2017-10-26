import { Service } from 'vue-di-attributes';

@Service
export class DumbService {
    constructor() {
    }
    public DoSomething() {
        return 123;
    }
}
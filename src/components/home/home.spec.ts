import { HomeComponent } from './home';
import { ComponentTest } from '../../util/component-test';

describe('Home component', () => {
  let vm: HomeComponent;

  beforeEach(() => {
    vm = new HomeComponent().$mount();
  });
  it('should work', () => {
    debugger;
    expect(vm.package).toBe('vue-webpack-typescript');
  });
});

import Component from 'vue-class-component';
import { ComponentTest } from '../../util/component-test';
import { AboutComponent } from './about';


@Component({
  template: require('./about.html')
})
class MockAboutComponent extends AboutComponent {
  constructor() {
    super();
  }
}

describe('About component', () => {
  let vm: AboutComponent;

  beforeEach(() => {
    vm = new AboutComponent().$mount();
    vm.another = {DoSomething: () => true };
  });

  it('should render correct contents', () => {
    debugger;
    expect(vm).toBeTruthy();
  });
  it('my shoes should be tied', () => {
    debugger;
    expect(vm.AreMyShoesTied()).toBeTruthy();
    vm.another = {DoSomething: () => false };
    expect(vm.AreMyShoesTied()).toBeFalsy();
  });
});

import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Import } from '../../syringe';
import { AnotherService } from '../../services/another.service';

@Component({
    template: require('./about.html')
})
export class AboutComponent extends Vue {

    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';
    @Import()
    another: AnotherService;
    
    switchValue: boolean = false;
    mounted() {
        debugger;
        console.log('mounted');
    }
    
    FlipMe() {
        this.switchValue = !this.switchValue;
    }

    AreMyShoesTied() {
        return this.another.DoSomething();
    }
}

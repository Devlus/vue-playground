import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Link } from './link';

@Component({
    template: require('./navbar.html')
})
export class NavbarComponent extends Vue {


    inverted: boolean = true; // default value

    object: { default: string } = { default: 'Default object property!' }; // objects as default values don't need to be wrapped into functions

    links: Link[] = [
        new Link('Home', '/'),
        new Link('About', '/about'),
        new Link('List', '/list')
    ];

    @Watch('$route.path')
    pathChanged() {
    }

    mounted() {
    }
}

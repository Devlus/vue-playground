import 'reflect-metadata';
import { Vue as _Vue } from 'vue/types/vue';
import { PluginFunction, PluginObject } from 'vue/types/plugin';
import * as classComponent from 'vue-class-component';
import services from './services';
import { servicesFactories } from './containerConfig';
import { PropOptions } from 'vue';

class SyringePlugin {
    install(Vue: typeof _Vue, options?: any) {
        console.log('config');
        Vue.mixin({
            beforeCreate: function () {

            },
            provide: getNewServices(),
        });
    }
}
export const Syringe: PluginObject<any> = new SyringePlugin();

function getNewServices() {
    let newServices = {};
    for (let key in serviceDefs) {
        if (serviceDefs.hasOwnProperty(key)) {
            newServices[key] = new serviceDefs[key]();
        }
    }
    return newServices;
}

// [Key:ServiceName, Value: ServiceConstructor]
let serviceDefs = {};

export function Service(target: Function) {
    // debugger;
    console.log('Service called on: ', target.name);
    serviceDefs[target.name] = target;
}

let classDefs = {};

export type Constructor = {
    new(...args: any[]): any
};
/* The prototype of the class*/
/* The name of the property*/

export function Import(options = {}) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        debugger;
        if (!Array.isArray(options) && typeof options['type'] === 'undefined') {
            options['type'] = Reflect.getMetadata('design:type', target, key);
        }
        classComponent.createDecorator(function (componentOptions, k) {
            if (typeof componentOptions.inject === 'undefined') {
                componentOptions.inject = {};
            }
            if (!Array.isArray(componentOptions.inject)) {
                componentOptions.inject[key] = options['type'].name || key;
            }
        })(target, key);
    };
}
// export function Import(options: (PropOptions | Constructor[] | Constructor) = {}): PropertyDecorator {
// // export function Import(target: Object, propertyKey: string | symbol): PropertyDecorator {
//     debugger;
//     return  classComponent.createDecorator(function (componentOptions, k) {
//         debugger;
//         let t = Reflect.getMetadata('design:type', target, propertyKey);
//         if (typeof componentOptions.inject === 'undefined') {
//             componentOptions.inject = {};
//         }
//         if (!Array.isArray(componentOptions.inject)) {
//             // componentOptions.inject[k] = propertyKey || k;
//             componentOptions.inject[k] = t || k;
//         }
//     });
    // debugger;    
    // let t = Reflect.getMetadata('design:type', target, propertyKey);
    // let c = new serviceDefs[t.name]();
    // // target.constructor.prototype[propertyKey] = new serviceDefs[t.name]();
    // console.log(`${propertyKey} type: ${t.name}`);
    // console.log('Service called on: ', target);
    // return d;
// }
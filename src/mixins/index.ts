import Vue from 'vue';
import Component from 'vue-class-component';

//注了混合
@Component
export class MyMixin extends Vue {
    public mixinValue = 'Hello';
    public getSubmit(name: string) {
        console.log(name);
    }
}


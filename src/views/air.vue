<template>
<div class="page">
    <p class="filters">{{fie | status}}</p>
    <test :vals="name" @change="handleChange" @reset="handleReset"></test>
    <el-form :model="form" ref="form">
        <el-form-item label="活动名称">
            <el-input v-model="form.name" placeholder="请输入活动名称"></el-input>
        </el-form-item>
        <el-form-item label="mingc">
        <el-select v-model="val" placeholder="请选择">
            <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
        </el-select>
        </el-form-item>
    </el-form>
    <div class="submit" @click="handleSubmit">提交</div>
</div>
</template>
<script lang="ts">
import { Vue, Watch, Prop, Model, Watch, Emit, Inject, Provide } from 'vue-property-decorator';
import { MyMixin } from '../mixins';
import Component, { mixins } from 'vue-class-component';
import test from '@/components/test'
@Component({
    components:{
        test
    }
})
export default class Air extends mixins(MyMixin) {
    form: Object = {
        name: ''
    }
    val: string = ''
    options: array = [];
    get age(): string {
        return this.newAge;
    }
    set age(age: string) {
        this.newAge = age;
    }
    public newAge: string = '78';
    public newName: string | number = 'jiang xiao jun';
    public fie: string = '1';
    public name: string = 'xiaojun';
    @Watch('name', { deep: true, immediate: true })
    public onChange(val: Name, oldVal: Name) {
        console.log(val);
    }
    handleChange(val) {
        console.log('oioikl')
        console.log(val)
    }
    handleReset(n) {
        console.log(n)
    }
    public created() {
        console.log(this.mixinValue);
        setTimeout(() => {
            this.name = 'jiang';
        }, 2000);
        g.toastMsg('success', '这是一个全局的弹窗方法');
        this.fullFun('调用全局的方法');
    }
    public mounted() {
        const dom = this.$refs.form;
        console.log(dom)
        this.age = 'xiaonan';
        // this.handleSubmit('测试mixins')
    }
    public handleSubmit() {
        console.log(`ts不需要methods`);
        this.options.push({
            label:'类型一',
            value:1
        })
        this.getSubmit('xin de dongxi');
    }
    // methods:{
    //     handleSubmit() {
    //         //this.getSubmit('这是一个测试的mixins')
    //     }
    // }
}
</script>
<template>
<div class="page">
    <div class="name">{{name}}</div>
    <el-input v-model="info"></el-input>
    <el-button type="primary" @click="handleClick">点击事件</el-button>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop, Model, Watch, Emit, Inject, Provide } from 'vue-property-decorator';
@Component
export default class Test extends Vue {
    name: string = 'xiaojun'
    info: string = 'ssss'
    @Prop({
        type: String,
        default: 'zhouquan'
    })
    vals:string
    @Watch('info')
    @Emit('change')
    handleChange(val:string, oldVal:string) {
        
    }
    created() {
        console.log(this.vals)
    }
    @Emit('reset')
    handleClick(): number {
        return 10
    }
}
</script>
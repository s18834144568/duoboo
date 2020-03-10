<template>
    <div>
        <b-container>
            <Title title="完善资料"></Title>
            <div class="userInfo">
                <div class="set-list-style d-flex my-4" v-for="(item, index) in form" :key="index">
                    <Addon :name="item.name"></Addon>
                    <b-form-group v-if="item.type == 'radio'" class="mb-0 ml-3">
                        <b-form-radio-group
                            v-model="item.selected"
                            :options="item.options"
                            size="lg"
                        >
                        </b-form-radio-group>
                    </b-form-group>
                    <Dropdown v-if="item.type == 'dropdown'" :locaty="city" ></Dropdown>
                </div>
                <b-button variant="success" block size="large">立即提交</b-button>
            </div>
        </b-container>
    </div>
</template>

<script>
import Title from '../components/Title'
import Addon from '../components/Addon'
import Dropdown from '../components/Dropdown'
import { city } from '../assets/data.js'
export default {
    name: 'Uregister',
    components : {
        Title,
        Addon,
        Dropdown
    },
    data() {
        return {
            form : {
                marry : {
                    name : "婚史",
                    type : "radio",
                    selected: '',
                    options: [
                        { text: '未婚', value: '0' },
                        { text: '离异', value: '1' },
                        { text: '丧偶', value: '2' }
                    ]
                },
                zinv : {
                    name : "子女",
                    type : "radio",
                    selected: '',
                    options: [
                        { text: '未生育', value: '0' },
                        { text: '有孩归自己', value: '1' },
                        { text: '有孩归对方', value: '2' },
                        { text: '其他', value: '3' }
                    ]
                },
                fangchan : {
                    name : "房产",
                    type : "radio",
                    selected: '',
                    options: [
                        { text: '暂无房产', value: '0' },
                        { text: '需要时购买', value: '1' },
                        { text: '已有房产', value: '2' }
                    ]
                },
                xueli : {
                    name : "学历",
                    type : "radio",
                    selected: '',
                    options: [
                        { text: '高中中专及以下', value: '0' },
                        { text: '大专', value: '1' },
                        { text: '本科', value: '2' },
                        { text: '硕士', value: '3' },
                        { text: '博士及以上', value: '4' }
                    ]
                },
                salay : {
                    name : "月薪",
                    type : "radio",
                    selected: '',
                    options: [
                        { text: '2千以下', value: '0' },
                        { text: '2千到5千', value: '1' },
                        { text: '5千到1万', value: '2' },
                        { text: '1万到2万', value: '3' },
                        { text: '2万以上', value: '4' }
                    ]
                },
                job : {
                    name : "职业",
                    type : "dropdown",
                    selected: '',
                    options: [
                        { text: '请选择', value: '0' },
                        { text: 'IT | 互联网 | 通信 | 电子', value: '1' },
                        { text: '销售 | 客服 | 市场', value: '2' },
                        { text: '服务业 | 酒店 | 餐饮 | 旅游等', value: '3' },
                        { text: '财务 | 人力资源 | 行政', value: '4' },
                        { text: '项目 | 质量 | 高级管理', value: '5' },
                        { text: '房产 | 建筑 | 物业管理', value: '6' },
                        { text: '会计 | 金融 | 银行 | 保险', value: '7' },
                        { text: '采购 | 贸易 | 交通 | 物流', value: '8' },
                        { text: '生产 | 制造 | 能源 | 材料', value: '9' },
                        { text: '传媒 | 印刷 | 艺术 | 设计', value: '10' },
                        { text: '咨询 | 法律 | 教育 | 翻译', value: '11' },
                        { text: '兼职 | 实习 | 社工 | 其他', value: '12' },
                        { text: '科研 | 环保 | 农业 | 公益', value: '13' },
                        { text: '政府 | 非赢利机构 | 学生 | 其他', value: '14' }
                    ]
                },
                height : {
                    name : "身高",
                    type : "dropdown",
                    selected: '',
                    options:  []// 自动生成
                },
                living : {
                    name : "现居",
                    type : "dropdown",
                    area : true,
                    selected: '',
                    options: city
                },
                hometown : {
                    name : "故乡",
                    type : "dropdown",
                    area : true,
                    selected: '',
                    options: city
                },
                xingge : {
                    name : "性格",
                    type : "radio",
                    selected: '',
                    options: [
                        { text: '内向', value: '0' },
                        { text: '文静', value: '1' },
                        { text: '洒脱', value: '2' },
                        { text: '外向', value: '3' },
                        { text: '活泼', value: '4' }
                    ]
                },
                look : {
                    name : "长相",
                    type : "radio",
                    selected: '',
                    options: [
                        { text: '端正', value: '0' },
                        { text: '英俊', value: '1' },
                        { text: '精致', value: '2' },
                        { text: '漂亮', value: '3' }
                    ]
                },
                shencai : {
                    name : "身材",
                    type : "radio",
                    selected: '',
                    options: [
                        { text: '健壮', value: '0' },
                        { text: '匀称', value: '1' },
                        { text: '苗条', value: '2' },
                        { text: '性感', value: '3' },
                        { text: '丰满', value: '4' }
                    ]
                },
                poc : {
                    name : "居住情况",
                    type : "radio",
                    selected: '',
                    options: [
                        { text: '独居', value: '0' },
                        { text: '合租', value: '1' },
                        { text: '住校', value: '2' },
                        { text: '住家', value: '3' },
                        { text: '其他', value: '4' }
                    ]
                },
                
                
            }
        }
    },
    created(){
        this.setHeight();
    },
    methods:{
        setHeight(){
            this.form.height.options.push({ text : '请选择', value : 0 });
            for(let i = 150; i < 220; i++){
                this.form.height.options.push(eval('('+`{ 'text' : '${i}', 'value' : '${i}'}`+')'));
            }
        }
    }
}
</script>

<style scoped>
    .userInfo{
        width: 595px;
        margin: 0 auto;
        margin-bottom:200px;
    }
    .userInfo .form-group .custom-control-inline{
        margin-right: 2rem;
    }
</style>
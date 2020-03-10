<template>
    <div>
        <span v-if="!locaty.area">
            <select>
                <option v-for="(val, index) in locaty.options" :key="index" :value="val.value">{{val.text}}</option>
            </select>
        </span>
        <span v-else>
            <select v-model="province" @change="changeCity">
                <option v-for="(val, index) in locaty.options" :key="index" :value="val.province">{{val.province}}</option>
            </select>
            <select v-model="c" @change="changeCounty">
                <option v-for="(name, index) in city" :key="index" :value="name.name">{{name.name}}</option>
            </select>
            <select  v-model="cy">
                <option v-for="(area, index) in county" :key="index" :value="area">{{area}}</option>
            </select>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'Dropdown',
        props : ["locaty"],
        data() {
            return {
                province : '选择省/直辖市' ,
                // 选择市区
                c : '选择市/区',
                city : [{ name : '选择市/区' }],
                // 县市
                cy : '选择县/市',
                county : ['选择县/市']
            }
        },
        methods:{
            // 当选择出现变化的时候，要修改city和county
            changeCity(){
                this.c = '选择市/区';
                this.cy = '选择县/市';
                this.city.splice(1)
                this.county.splice(1);
                for(var item in this.locaty.options){
                    if(this.locaty.options[item].province == this.province){
                        this.city = this.city.concat(this.locaty.options[item].city);
                    }
                }
            },
            changeCounty(){
                this.cy = '选择县/市';
                this.county.splice(1);
                this.locaty.options.forEach(ele => {
                    if(ele.province == this.province){
                        ele.city.forEach((ele)=>{
                            if(ele.name == this.c){
                                this.county = this.county.concat(ele.area);
                            }
                        })
                    }
                });
            }
        }
        
    }
</script>

<style scoped>
    select{
        height: 100%;
        padding-left: 10px;
        outline: none;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color ease-in-out 1s,-webkit-box-shadow ease-in-out 1s;
        -o-transition: border-color ease-in-out 1s,box-shadow ease-in-out 1s;
        transition: border-color ease-in-out 1s,-webkit-box-shadow ease-in-out 1s;
        transition: border-color ease-in-out 1s,box-shadow ease-in-out 1s;
        transition: border-color ease-in-out 1s,box-shadow ease-in-out 1s,-webkit-box-shadow ease-in-out 1s;
    }
    select:focus{
        border-color: rgb(39,103,205);
        box-shadow: 0 0 8px 0px rgb(39,103,205);
    }
    .set-list-style:nth-child(6) div span select{
        width: 300px !important;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    .set-list-style:nth-child(7) div span select{
        width: 100px !important;
    }
    .set-list-style:nth-child(7) div span:after{
        content:'厘米';
        display: inline;
        padding: 5px 12px;
        color: #222;
        line-height: 1;
    }
    .set-list-style:nth-child(8) div span select:nth-child(1),.set-list-style:nth-child(9) div span select:nth-child(1){
        width: 130px !important;
    }
    .set-list-style:nth-child(8) div span select:nth-child(2),.set-list-style:nth-child(9) div span select:nth-child(2){
        width: 170px !important;
    }
    .set-list-style:nth-child(8) div span select:nth-child(3),.set-list-style:nth-child(9) div span select:nth-child(3){
        width: 210px !important;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    
</style>
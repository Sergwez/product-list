<template>
<div class="filters">
    <div class="sort sort-js">
        <div class="sort__text" @click="selectIsOpen = !selectIsOpen">
            {{currentFilter}}
            <svg class="icon" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264" stroke="#B4B4B4"/>
            </svg>
        </div>
        <div class="sort__select" :class="selectIsOpen ? 'sort__select_open' : ''">
            <label class="sort__select-item" v-for="sort in allSort" :key="sort.id" @click="changeSort(sort.id)">
                <input name="sort" type="radio" :value="sort.name" v-model="currentFilter">
                {{sort.name}}
            </label>
        </div>
    </div>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data (){
        return{
            currentFilter:"По умолчанию",
            selectIsOpen: false,
            allSort:[
                {
                    id: 0,
                    name: "По цене min",
                },
                {
                    id: 1,
                    name: "По цене max",
                },
                {
                    id: 2,
                    name: "По наименованию",
                }
            ]
        }
    },
    methods:{
        ...mapActions({changeSort: 'products/changeSort'})
    },
    mounted(){
        var vm = this;
        document.addEventListener('click', function (e){
            let controlSelectDiv = document.querySelector('.sort-js')
            if(!controlSelectDiv.contains(e.target)&&vm.selectIsOpen == true){
                vm.selectIsOpen = false
            }
        });
    }
}
</script>
<style lang="scss" scoped>
    .filters{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        flex-grow: 1;
        margin-bottom: 16px;
        .sort{
            position: relative;
            height: 36px;
            display: flex;
            flex-direction: row;
            align-items: center;
            background: #FFFEFB;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            &__text{
                display: flex;
                flex-direction: row;
                align-items: center;
                font-size: 12px;
                line-height: 15px;
                color: #B4B4B4;
                width: 100%;
                height: 100%;
                cursor: pointer;
                padding: 0 16px;
                .icon{
                    margin-left: 5px;
                }
            }
            &__select{
                display: none;
                flex-direction: column;
                position: absolute;
                width:max-content;
                right: 0;
                top: 40px;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
                overflow: hidden;
                background: #FFFEFB;
                z-index: 1;
                &_open{
                    display: flex;
                }
                &-item{
                    padding: 4px 16px;
                    font-size: 12px;
                    color: #B4B4B4;
                    cursor: pointer;
                    transition: .3s;
                    &:hover{
                        background: #B4B4B4;
                        color: #fff;
                    }
                    &:last-of-type{
                        padding-bottom: 6px;
                    }
                    &:first-of-type{
                        padding-top: 6px;
                    }
                    input{
                        display: none;
                    }
                }
            }
        }
    }
</style>
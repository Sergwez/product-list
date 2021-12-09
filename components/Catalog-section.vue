<template>
 <div class="catalog-section">
     <div class="catalog-section__container">
        <div class="catalog-section__sidebar">
            <h2 class="catalog-section__title">Добавление товара</h2>
            <Add-product></Add-product>
        </div>
        <div class="catalog-section__content">
            <Filters></Filters>
            <Products></Products>
        </div>
     </div>
 </div>
</template>
 <script>
import {mapActions} from 'vuex'
 export default {
    methods: {
        ...mapActions({firstLoad: 'products/firstLoad'}),
    },
    mounted(){
        this.firstLoad()
    }
 }
 </script>
<style lang="scss" scoped>
.catalog-section{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: rgba(255, 254, 251, 0.8);
    font-family: 'Source Sans Pro';
    font-size: 16px;
    color: #3F3F3F;
    margin:0;
    &__container{
        @media (min-width: 1080px) {
            padding:32px;
            max-width: 1080px;
            display: flex;
            flex-direction: row;
        }
        @media (min-width: 1440px) {
            padding:32px;
            max-width: 1440px;
        }
    }
    &__header{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 16px;
        @media (min-width: 1080px) {
            flex-direction: row;
            align-items: flex-end;
        }
    }
    &__title{
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
        margin:0 0 16px;
        text-align: center;
        @media (min-width: 1080px) {
            text-align: left;
        }
    }
    &__content{
        display: flex;
        flex-direction: column;
        width: 100%;
        @media (min-width: 1080px) {
            flex-direction: column;
            width: 1080px;
        }
        @media (min-width: 1440px) {

            width: 1440px;
        }
    }
}
</style>

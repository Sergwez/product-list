<template>
    <div class="products">
        <loader v-if="showLoader"></loader>
        <transition-group class="products__teasers" tag="div" name="flip-list" v-else>
            <Product-teaser v-for="product in allProducts" :product="product" :key="product.id"></Product-teaser>
        </transition-group>

    </div>
</template>
<script>
 import {mapGetters} from 'vuex'
 export default {
    computed:{
        ...mapGetters({allProducts:'products/allProducts', showLoader:'products/getLoaderStatus'})
    },
 }
</script>
<style lang="scss" scoped>
.products{
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (min-width: 1080px) {
        padding-right: 16px;
    }
    &__teasers{
        display: grid;
        row-gap: 16px;
        column-gap: 16px;
        @media (min-width: 720px) {
            grid-template-columns: repeat(2, 332px);
        }
        @media (min-width: 1080px) {
            margin-left: 16px;
        }
        @media (min-width: 1440px) {
            grid-template-columns: repeat(3, 332px);
        }
    }
    .flip-list-move {
        transition: transform .4s ease;
    }
}
</style>
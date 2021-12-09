<template>
    <div class="product-teaser" v-if="product">
        <div class="product-teaser__delete" @click="deleteProduct(product.id)">
            <svg-icon class="icon-delete" name="delete" />
        </div>
        <img class="product-teaser__img" :src="product.link" alt="">
        <h2 class="product-teaser__title">{{product.title}}</h2>
        <div class="product-teaser__text">{{product.description}}</div>
        <div class="product-teaser__price">{{product.price}} руб.</div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props: {
        product: Object
    },
    methods: {
    ...mapActions({deleteProduct: 'products/deleteProducts'}),
    }
}
</script>
<style lang="scss" scoped>
.product-teaser{
    display: flex;
    flex-direction: column;
    width: 332px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    position: relative;
    &:hover {
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.05);
        .product-teaser__delete{
            display: flex;
            opacity: 1;
            animation: showDeleteBuuton .3s ease-in-out 1;
        }
    }
    &__delete{
        opacity: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: -8px;
        top:-8px;
        background: #FF8484;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        width: 32px;
        height: 32px;
        cursor: pointer;
        @media (min-width: 1080px) {
            display: none;
            opacity: 0;
        }
        .icon-delete{
            stroke: #fff;
            height: 16px;
            width: 16px;
        }
    }
    &__img{
        width: 100%;
        height: auto;
        max-height: 200px;
        margin: 0 0 16px 0;
    }
    &__title{
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        margin: 0 16px 16px 16px;
    }
    &__text{
        font-size: 16px;
        line-height: 20px;
        margin: 0 16px 16px 16px;
        min-height: 96px;
        flex-grow: 1;
    }
    &__price{
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
        margin: 0 0 24px 16px;
    }
    @keyframes showDeleteBuuton {
        from {
            opacity: 0;
            display: flex;
            }
        to { opacity: 1; }
    }
}
</style>
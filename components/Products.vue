<template>
    <div class="products">

        <div class="products__teasers">
            <Product-teaser v-for="item in 25" :key="item"></Product-teaser>
        </div>
    </div>
</template>
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
}
</style>
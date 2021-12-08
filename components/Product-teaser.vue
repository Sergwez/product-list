<template>
    <div class="product-teaser">
        <div class="product-teaser__delete">
            <svg-icon class="icon-delete" name="delete" />
        </div>
        <img class="product-teaser__img" src="https://zeda.io/wp-content/uploads/2021/06/Whats-the-product-life-cycle.png" alt="">
        <h2 class="product-teaser__title">Наименование товара</h2>
        <div class="product-teaser__text">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</div>
        <div class="product-teaser__price">10 000 руб.</div>
    </div>
</template>
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
        opacity: 0;
        display: none;
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
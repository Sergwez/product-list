<template>
    <div class="add-products">
        <div class="add-products__form-group">
            <label class="add-products__form-label require">Наименование товара</label>
            <input class="add-products__form-control" type="text" placeholder="Введите наименование товара">
            <span class="add-products__form-error">Поле является обязательным</span>
        </div>
        <div class="add-products__form-group">
            <label class="add-products__form-label require">Описание товара</label>
            <textarea class="add-products__form-control textarea" type="text" placeholder="Введите описание товара"></textarea>
            <span class="add-products__form-error">Поле является обязательным</span>
        </div>
        <div class="add-products__form-group">
            <label class="add-products__form-label require">Ссылка на изображение товара</label>
            <input class="add-products__form-control" type="text" placeholder="Введите ссылку">
        </div>
        <div class="add-products__form-group">
            <label class="add-products__form-label require">Цена товара</label>
            <input class="add-products__form-control error" type="text" placeholder="Введите цену">
            <span class="add-products__form-error">Поле является обязательным</span>
        </div>
        <button class="add-products__btn active">Добавить товар</button>

    </div>
</template>
<style lang="scss">
.add-products{
    width: 100%;
    padding: 18px 24px 24px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    margin-bottom: 16px;
    @media (min-width: 1080px){
        margin-bottom: 0;
    }
    @media (min-width: 1440px){
        width: 332px;
    }
    &__form-group{
        margin-bottom: 8px;
    }
    &__form-label{
        color: #49485E;
        font-size: 10px;
        line-height: 13px;
        position: relative;
        &.require::after{
            content: "";
            position: absolute;
            border-radius: 50%;
            width: 4px;
            height: 4px;
            top: 0;
            right: -5px;
            background: #FF8484;
        }
    }
    &__form-control{
        margin-top:4px;
        height: 36px;
        padding-left: 16px;
        font-size: 12px;
        line-height: 15px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        border: none;
        width: 100%;
        outline: none;
        &::placeholder{
            color: #B4B4B4;

        }
        &.textarea{
            min-height: 108px;
            resize: none;
            padding-top: 11px;
        }
        &.error{
            border: 1px solid #FF8484;
        }
    }
    &__form-error{
        color: #FF8484;
        font-size: 8px;
        line-height: 10px;
        display: none;
    }
    &__btn{
        height: 36px;
        background: #EEEEEE;
        border-radius: 10px;
        width: 100%;
        border: none;
        margin-top: 16px;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color: #B4B4B4;
        cursor: pointer;
        transition: .3s;
        &.active{
            color: #fff;
            background: #7BAE73;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
        &:hover{
            opacity: .8;
        }
    }
}
</style>

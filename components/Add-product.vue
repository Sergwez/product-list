<template>
  <div class="add-products">
    <div class="add-products__form-group">
      <label class="add-products__form-label require">Наименование товара</label>
      <input
        class="add-products__form-control"
        :class="$v.product.title.$error ? 'error' : ''"
        type="text"
        placeholder="Введите наименование товара"
        v-model.trim="$v.product.title.$model"
      />
      <span class="add-products__form-error" v-if="$v.product.title.$error"
        >Поле является обязательным</span>
    </div>
    <div class="add-products__form-group">
      <label class="add-products__form-label">Описание товара</label>
      <textarea
        class="add-products__form-control textarea"
        type="text"
        placeholder="Введите описание товара"
        v-model="product.description"
      ></textarea>
    </div>
    <div class="add-products__form-group">
      <label class="add-products__form-label require">Ссылка на изображение товара</label>
      <input
        class="add-products__form-control"
        :class="$v.product.link.$error ? 'error' : ''"
        type="url"
        placeholder="Введите ссылку"
        v-model.trim="$v.product.link.$model"
      />
      <span class="add-products__form-error" v-if="$v.product.link.$error">Поле является обязательным</span>
    </div>
    <div class="add-products__form-group">
      <label class="add-products__form-label require">Цена товара</label>
      <input
        class="add-products__form-control"
        @input="formatPrice()"
        :class="$v.product.price.$error ? 'error' : ''"
        type="text"
        placeholder="Введите цену"
        v-model.trim="$v.product.price.$model"
      />
      <span
        class="add-products__form-error"
        v-if="$v.product.price.$error && !$v.product.price.required"
        >Поле является обязательным</span>
    </div>
    <button
      class="add-products__btn"
      @click="addNewProduct()"
      :class="$v.validationGroup.$invalid ? '' : 'active'" :disabled="$v.validationGroup.$invalid">
      Добавить товар
    </button>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      product: {
        title: "",
        description: "",
        link: "",
        price: "",
      },
    };
  },
  validations: {
    product: {
      title: {
        required,
      },
      link: {
        required,
      },
      price: {
        required,
      },
    },
    validationGroup: ["product.title", "product.link", "product.price"],
  },
  methods: {
    ...mapActions({addProduct: 'products/addProducts'}),
    addNewProduct(){
        this.addProduct(this.product)
    },
    formatPrice() {
      this.product.price = this.product.price
        .split(" ")
        .join("")
        .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
    },
  },
};
</script>
<style lang="scss">
.add-products {
  width: 100%;
  padding: 18px 24px 24px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  margin-bottom: 16px;
  @media (min-width: 1080px) {
    margin-bottom: 0;
  }
  @media (min-width: 1440px) {
    width: 332px;
  }
  &__form-group {
    margin-bottom: 8px;
  }
  &__form-label {
    color: #49485e;
    font-size: 10px;
    line-height: 13px;
    position: relative;
    &.require::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      width: 4px;
      height: 4px;
      top: 0;
      right: -5px;
      background: #ff8484;
    }
  }
  &__form-control {
    margin-top: 4px;
    height: 36px;
    padding-left: 16px;
    font-size: 12px;
    line-height: 15px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    width: 100%;
    outline: none;
    &::placeholder {
      color: #b4b4b4;
    }
    &.textarea {
      min-height: 108px;
      resize: none;
      padding-top: 11px;
    }
    &.error {
      border: 1px solid #ff8484;
    }
  }
  &__form-error {
    color: #ff8484;
    font-size: 8px;
    line-height: 10px;
  }
  &__btn {
    height: 36px;
    background: #eeeeee;
    border-radius: 10px;
    width: 100%;
    border: none;
    margin-top: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #b4b4b4;
    cursor: pointer;
    transition: 0.3s;
    &.active {
      color: #fff;
      background: #7bae73;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    &:hover:not(:disabled) {
      opacity: 0.8;
    }
  }
}
</style>

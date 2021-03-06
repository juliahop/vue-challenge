<template>
  <div class="container">

    <div class="options-container" v-for="option in options" :key="option.slug">
      <Option :option="option" />
    </div>

    <ProductItem :product="productName" class="sidebar">
      <Button text="Reset selected" class="btn btn-primary" @click="clearSelected"/>
      <template v-slot:add>
      <Button text="Add to cart" class="btn btn-primary" @click="addToCart(selectedProduct)" />
      </template>
    </ProductItem>

    

  </div>
</template>

<script>
import ProductItem from './ProductItem'
import Option from './Option'
import Button from './Button'

export default {
  name: 'ProductOptions',
  components: { ProductItem, Option, Button },
  props: ['product'],
  data() {
    return {
      productName: this.product.titleSingle,
      options: this.product.properties,
    }
  },
  computed: {
    selectedOptions() { 
      return this.$store.getters.selectedOptions;      
    },
    selectedProduct() {
      return {
        name: this.productName,
        options: [...this.selectedOptions]
      }      
    }
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('addToCart', item)
    },
    clearSelected() {
      this.$store.dispatch('clearSelected')
    }
  },
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('clearSelected')
    }
  }

}
</script>

<style>
  .container {
    position: relative;
    text-align: left;
    padding: 2rem;
  }

  .sidebar {
    position: fixed;
    right: 5%;
    top: 10%;
    /* overflow-y: scroll; */
  }

  
</style>

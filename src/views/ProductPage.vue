<template>
  <h1>Configure your {{ productType }} hier</h1>
  <ProductOptions :product="productData"/>  
</template>

<script>
import businesscards from '../../data/businesscards.json'
import flyers from '../../data/flyers.json'
import posters from '../../data/posters.json'
import ProductOptions from '../components/ProductOptions'


export default {
  name: 'ProductPage',
  components: { ProductOptions },
  props: ['product'],
  data() {
    return {
      businesscards,
      flyers,
      posters,
      productType: this.$route.params.slug
    }
  },
  computed: {
    productData() {
      if(this.productType === 'businesscards') {
        return businesscards
      } else if(this.productType === 'flyers') {
        return flyers
      } else {
        return posters
      }
    }
  }
}
</script>

<style>

</style>
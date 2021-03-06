<template>
  <h1>This is your shopping cart</h1>
  <div class="container">
    <ol></ol>
    <CartItem :inCart="inCart" />
  </div>
  
  <!-- {{inCart}} -->
</template>

<script>
import CartItem from '../components/CartItem'


export default {
  components: { CartItem },
  computed: {
    inCart() { 
      return this.$store.getters.inCart
    }
  }
}
</script>

<style>

</style>
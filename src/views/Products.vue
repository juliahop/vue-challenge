<template>
  <div>
    <ul>
      <!-- It would be nice to have a json with all the products in it, to be able to use v-for loop hier -->
      <router-link :to="{ name: 'ProductPage', params: { slug: bcard.sku}}"><li>{{bcard.sku}}</li></router-link>
      <router-link :to="{ name: 'ProductPage', params: { slug: flyer.sku}}"><li>{{flyer.sku}}</li></router-link>
      <router-link :to="{ name: 'ProductPage', params: { slug: poster.sku}}"><li>{{poster.sku}}</li></router-link>
    </ul>
  </div>
</template>

<script>
import bcard from '../../data/businesscards.json'
import flyer from '../../data/flyers.json'
import poster from '../../data/posters.json'

export default {
  data() {
    return {
      bcard,
      flyer,
      poster
    }
  }
}
</script>

<style>

</style>
<template>
  <ol>   
    <li v-for="(product, index) in inCart" :key="index">
        <h4>{{product.name}}</h4>
        <ul v-for="option in product.options" :key="option.variant">
          <li>{{option.name}}: {{option.variant}}</li>
        </ul>
    </li>      
  </ol>
</template>

<script>
export default {
  props: ['inCart']
}
</script>

<style>

</style>
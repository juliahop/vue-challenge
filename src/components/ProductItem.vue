<template>
  <div class="item">
    <slot></slot>
    <h2>Uw {{product}}</h2>
    <ul v-if="selectedOptions.length">
      <li v-for="option in selectedOptions" :key="option.variant">{{option.name}} - {{option.variant}}</li>
    </ul>
    <slot name="add"></slot>
  </div>
  
</template>

<script>

export default {
  props: ['product'],
  components: { },
  data() {
    return {
      
    }
  },
  computed: {
    selectedOptions() { 
      return this.$store.getters.selectedOptions;      
    }
  }
}
</script>

<style>
  .item {
    border: 1px solid #eee;
    padding: 1.5rem;
    max-height: 80%;
    max-width: 20%;
  }
</style>
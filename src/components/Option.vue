<template>
  <div>
      <label>{{option.title}}</label>
      <select v-model="variantSelected" @change="addToSelected(optionSelected)">
        <option v-for="variant in option.options" 
        :key="variant.slug" 
        :value="variant.name">{{variant.name}}</option>
      </select>
      
  </div>   
</template>

<script>
export default {
  props: ['option'],
  data() {
    return {
      variantSelected: '',    
    }
  },
  computed: {
    optionSelected() {
      return {
        name: this.option.title,
        variant: this.variantSelected
      }
    },
    optionsArray() {
      return this.$store.getters.selectedOptions
    }
  },
  methods: {
    addToSelected(option) {
      let variant = option.variant
      let index = this.optionsArray.findIndex(item => item.name === option.name)
      if ( index !== -1) {
        this.$store.dispatch('replaceInSelected', {variant, index})
      } else {
        this.$store.dispatch('addToSelected', option)
      }     
    }
  },
  watch: {
    optionsArray() {
      if (!this.optionsArray.length) {
        this.variantSelected = ''
      }  
    } 
  }
}
</script>

<style>

</style>
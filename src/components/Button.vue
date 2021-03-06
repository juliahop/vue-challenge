<template>
  <button @click="handleClick" class="buttonStyle" text="buttonText">{{text}}</button>
</template>

<script>
export default {
  props: ['text', 'class'],
  methods: {
    
  }
}
</script>

<style>

</style>
// import { createApp } from '@vue/runtime-dom';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      selectedOptions: [],
      inCart: []
    }
  },
  getters: {
    selectedOptions: state => state.selectedOptions,
    inCart: state => state.inCart
  },
  mutations: {
    ADD_TO_CART(state, item) {
      state.inCart.push(item);
      state.selectedOptions = [];
    },
    ADD_TO_SELECTED(state, option) {
      state.selectedOptions.push({name: option.name, variant: option.variant});
    },
    REPLACE_IN_SELECTED(state, {variant, index}) {
      state.selectedOptions[index].variant = variant
    },
    CLEAR_SELECTED(state) {
      state.selectedOptions = []
    }
  },
  actions: {
    addToSelected(context, option) {
      context.commit('ADD_TO_SELECTED', option)
    },
    replaceInSelected(context, option) {
      context.commit('REPLACE_IN_SELECTED', option)
    },
    addToCart(context, item) { 
      context.commit('ADD_TO_CART', item);
    },
    clearSelected(context) {
      context.commit('CLEAR_SELECTED');
    }
  }
})

export default store;
<template>
  <button class="w-12 h-12 rounded overflow-hidden ripple focus:outline-none" :class="outline? `border-2 border-${this.color} hover:border-0 hover:bg-${this.color} text-${this.color} hover:text-white` : `bg-${color}`" @click="handleClick">
    <slot name="icon" />
  </button>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: 'teal-800'
      },
      outline: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      handleClick(evt){
        this.$emit('click', evt);
      }
    }
  }
</script>

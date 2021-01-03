<template>
  <button class="h-12 flex rounded items-center justify-start overflow-hidden focus:outline-none" :class="`bg-blue-500`" @click="handleClick">
    <span class="w-12 h-12 flex items-center justify-center" :class="`bg-blue-600`">
      <i class="fab fa-twitter text-white"></i>
    </span>
    <span class="text-white text-sm py-3 px-4 font-sans tracking-wide font-bold uppercase text-center">
      Twitter&nbsp;
    </span>
  </button>
</template>

<script>
  export default {
    methods: {
      handleClick(evt){
        this.$emit('click', evt);
      }
    }
  }

</script>

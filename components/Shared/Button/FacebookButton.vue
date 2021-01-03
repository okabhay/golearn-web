<template>
  <button class="h-12 flex rounded items-center justify-start overflow-hidden focus:outline-none" :class="`bg-blue-700`" @click="handleClick">
    <span class="w-12 h-12 flex items-center justify-center" :class="`bg-blue-800`">
      <i class="fab fa-facebook-f text-white"></i>
    </span>
    <span class="text-white text-sm py-4 px-4 font-sans tracking-wide font-bold uppercase text-center">
      Facebook
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

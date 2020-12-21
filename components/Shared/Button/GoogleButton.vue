<template>
  <button class="h-11 flex rounded items-center justify-start overflow-hidden" :class="`bg-red-600`" @click="handleClick">
    <div class="w-11 h-11 flex items-center justify-center" :class="`bg-red-700`">
      <i class="fab fa-google text-white"></i>
    </div>
    <span class="text-white text-sm py-3 px-4 font-sans tracking-wide font-bold uppercase text-center">
      Google &nbsp;&nbsp;
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

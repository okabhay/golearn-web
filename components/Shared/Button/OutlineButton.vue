<template>
  <button class="h-12 flex rounded items-center border-2 border-gray-300 justify-center overflow-hidden focus:outline-none" @click="handleClick">
    <span class="text-gray-800 text-sm py-3 px-4 font-sans tracking-wide font-bold" :class="{uppercase : uppercase}">
      {{title}}
    </span>
  </button>
</template>

<script>
  export default {
    props:{
      title: String,
    //   color: {
    //     type: String,
    //     default: 'green'
    //   },
      uppercase: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick(evt){
        this.$emit('click', evt);
      }
    }
  }

</script>

<template>
  <button class="h-12 flex rounded items-center justify-between overflow-hidden ripple transition focus:outline-none hover:bg-opacity-90" :class="`bg-${color}`" @click="handleClick" :disabled="isLoading">
    <span class="text-white text-sm py-3 px-4 font-sans tracking-wide font-bold" :class="{uppercase : uppercase}">
      {{title}}
    </span>
    <span class="w-12 h-12 flex items-center justify-center">
      <i class="fas fa-spinner fa-lg transition animate-spin text-white" v-if="isLoading"></i>
      <slot name="icon" v-else/>
    </span>
  </button>
</template>

<script>
  export default {
    props:{
      title: String,
      color: {
        type: String,
        default: 'teal-800'
      },
      uppercase: {
        type: Boolean,
        default: false
      },
      isLoading: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      handleClick(evt){
        this.$emit('click', evt);
      }
    }
  }

</script>

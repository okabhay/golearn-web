<template>
  <button class="h-11 flex rounded items-center justify-between overflow-hidden" :class="`bg-${color}-600`" @click="handleClick">
    <span class="text-white text-sm py-3 px-4 font-sans tracking-wide font-bold" :class="{uppercase : uppercase}">
      {{title}}
    </span>
    <div class="w-11 h-11 flex items-center justify-center" :class="`bg-${color}-700 hover:bg-${color}-700`">
      <slot name="icon" />
    </div>
  </button>
</template>

<script>
  export default {
    props:{
      title: String,
      color: {
        type: String,
        default: 'green'
      },
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

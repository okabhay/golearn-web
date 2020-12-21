<template>
  <div class="container mx-24 my-12">
    <div class="mt-20 flex item-center flex-wrap gap-4">
      <PrimaryButton title="Schedule a demo" :uppercase="true" @click="onClick">
        <template v-slot:icon>
          <i class="fas fa-chevron-right text-white"></i>
        </template>
      </PrimaryButton>

      <IconButton color="red-700" @click="onClick">
        <template v-slot:icon>
          <i class="fas fa-cog text-white"></i>
        </template>
      </IconButton>
 
      <IconButton color="red-700" :outline="true" @click="onClick">
        <template v-slot:icon>
          <i class="fas fa-cog"></i>
        </template>
      </IconButton>

      <IconButton>
        <template v-slot:icon>
          <i class="fas fa-cog text-white"></i>
        </template>
      </IconButton>

      <FacebookButton />
      <GoogleButton />
      <TwitterButton />
    </div>

  </div>
</template>

<script>
  export default {
    layout: 'main',
    methods:{
      onClick(){
        this.$router.push('/admin/dashboard')
      }
    }
  }
</script>
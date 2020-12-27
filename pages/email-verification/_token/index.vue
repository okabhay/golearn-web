<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md" v-if="isVerified">
      <img src="/email-sent.svg" class="mb-4"/>
      <p class="my-2">Your <strong>{{email}}</strong> is verified now you can go back to login again.</p>
    </div>
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md" v-else>
      <img src="/email-sent.svg" class="mb-4"/>
      <p class="my-2">Your <strong>{{email}}</strong> is not verified it seems verification link or email is invalid.</p>
    </div>
    <div class="my-2">
      <p class="text-sm">Nevermind! <nuxt-link to="/login" class="underline"> Take me back to login</nuxt-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'main',
    data() {
      return {
        isVerified: true,
        email: 'example@gmail.com'
      }
    },
    methods: {
      
    },
  }
</script>
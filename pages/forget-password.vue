<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md" v-if="!isSent">
      <p class="text-base my-2">To reset the password enter the email you used to sign in.</p>
      <form>
          <div class="flex flex-col my-6">
            <!-- <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label> -->
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <t-input id="email" type="email" v-model="email" name="email" class="base-input w-full pl-10" placeholder="Email address" />
            </div>
          </div>

          <PrimaryButton title="Get reset link" color="teal-800" @click="sendResetLink" type="button" class="w-full">
            <template v-slot:icon>
              <i class="fas fa-chevron-right text-white"></i>
            </template>
          </PrimaryButton>
        </form>
    </div>
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md" v-else>
      <img src="/email-sent.svg" class="mb-4"/>
      <p class="my-2">Check your <strong>{{email}}</strong> inbox for instructions from us on how to reset your password.</p>
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
        isSent: false,
        email: null,
      }
    },
    methods: {
      sendResetLink() {
        this.isSent = true;
      }
    },
  }
</script>
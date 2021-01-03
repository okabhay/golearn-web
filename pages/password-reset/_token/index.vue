<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md" v-if="!isSent">
      <p class="text-base my-2">Enter your new password. After confirming, you will be asked to log in again.</p>
      <form>
          <div class="flex flex-col my-6">
            <!-- <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label> -->
            <div class="relative mb-4">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <span>
                  <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
              </div>
              <t-input id="password" type="password" name="password" class="w-full pl-10" placeholder="New password" />
            </div>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <span>
                  <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
              </div>
              <t-input id="password" type="password" name="password" class="w-full pl-10" placeholder="Confirm new password" />
            </div>
          </div>

          <PrimaryButton title="Reset password" color="teal-800" @click="onClick" type="button" class="w-full">
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
        password: null,
      }
    },
    methods: {
      resetPassword() {
        this.isSent = true;
      }
    },
  }
</script>
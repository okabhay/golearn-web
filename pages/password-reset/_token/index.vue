<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md">
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
              <input id="password" type="password" name="password"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded border border-gray-400 w-full py-2"
                placeholder="New password" />
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
              <input id="password" type="password" name="password"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded border border-gray-400 w-full py-2"
                placeholder="Confirm new password" />
            </div>
          </div>

          <PrimaryButton title="Reset password" color="green" @click="onClick" type="button" class="w-full">
            <template v-slot:icon>
              <i class="fas fa-chevron-right text-white"></i>
            </template>
          </PrimaryButton>
        </form>
    </div>
    <div class="my-2">
      <p class="text-sm">Nevermind! <nuxt-link to="/login" class="underline"> Take me back to login</nuxt-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'main'
  }
</script>
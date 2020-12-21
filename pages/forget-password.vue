<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md">
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
              <input id="email" type="email" name="email"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded border border-gray-400 w-full py-2"
                placeholder="Email address" />
            </div>
          </div>

          <PrimaryButton title="Get reset link" color="green" @click="onClick" type="button" class="w-full">
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
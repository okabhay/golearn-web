<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md">
      <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Register yourself</div>
      <p class="text-sm text-center my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum corporis earum doloribus.</p>
      <div class="flex justify-center h-12 gap-2 my-4">
        <FacebookButton />
        <GoogleButton />
      </div>
      <div class="relative mt-10 h-px bg-gray-300">
        <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
          <span class="bg-white px-4 text-xs text-gray-500 uppercase">Or Register With Email</span>
        </div>
      </div>
      <div class="mt-10">
        <form>
            <div class="flex flex-col mb-2">
            <!-- <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label> -->
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <i class="fas fa-user-circle fa-lg"></i>
              </div>
              <input id="email" type="email" name="email"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded border border-gray-400 w-full py-2"
                placeholder="User name" />
            </div>
          </div>
          <div class="flex flex-col mb-2">
            <!-- <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label> -->
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <i class="fas fa-at fa-lg"></i>
              </div>
              <input id="email" type="email" name="email"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded border border-gray-400 w-full py-2"
                placeholder="Email address" />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <!-- <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label> -->
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <i class="fas fa-lock fa-lg"></i>
              </div>
              <input id="password" type="password" name="password"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded border border-gray-400 w-full py-2"
                placeholder="Password" />
            </div>
          </div>

          <PrimaryButton title="Create My Account" :uppercase="true" :color="'orange'" @click="onClick" type="button">
            <template v-slot:icon>
              <i class="fas fa-chevron-right text-white"></i>
            </template>
          </PrimaryButton>
        </form>
      </div>
    </div>
    <div class="my-2">
      <p class="text-sm">Nevermind! <nuxt-link to="/login" class="underline"> Take me back to login</nuxt-link></p>
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

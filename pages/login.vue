<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md">
      <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Welcome !</div>
      <p class="text-sm text-center my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum corporis earum doloribus.</p>
      <div class="flex justify-between h-12 gap-2 my-4">
        <FacebookButton class="w-full"/>
        <GoogleButton class="w-full"/>
      </div>
      <div class="relative mt-10 h-px bg-gray-300">
        <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
          <span class="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
        </div>
      </div>
      <div class="mt-10">
        <form>
          <div class="flex flex-col mb-2">
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <t-input id="email" type="email" name="email" class="w-full pl-10" placeholder="Email address" />
            </div>
          </div>
          <div class="flex flex-col mb-6">
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
              <t-input id="password" type="password" name="password" class="w-full pl-10" placeholder="Password" />
            </div>
          </div>

          <PrimaryButton title="Log me in" :uppercase="true" :isLoading="loading" color="teal-800" @click="onClick" type="button" class="w-full">
            <template v-slot:icon>
              <i class="fas fa-chevron-right text-white"></i>
            </template>
          </PrimaryButton>
          
          <t-button @click="$router.push('/register')" type="button" class="mt-2 py-3 w-full rounded" variant="secondary"> CREATE AN ACCOUNT </t-button>
        </form>
      </div>
      <div class="flex justify-center items-center mt-6">
        <nuxt-link to="/forget-password" class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
          <span>
            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </span>
          <span class="ml-2">Forget password?</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'main',
    data() {
      return {
        loading: false,
      }
    },
    methods:{
      async onClick(){
        this.loading = true,
        await setTimeout(() => {
          this.loading = false;
          this.$router.push('/admin/dashboard')
        }, 5000);
      }
    }
  }

</script>

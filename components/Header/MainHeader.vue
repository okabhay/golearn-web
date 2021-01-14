<template>
  <div>
    <nav style="height: 58px;" aria-label="top bar" class="flex-none flex justify-between border-b border-gray-300 bg-white">
      <!-- top bar left -->
      <AddAction />

      <!-- to bar right  -->
      <ul aria-label="top bar right" aria-orientation="horizontal" class="px-8 flex items-center">
        <li class="w-64">
          <div class="my-2 p-1 bg-white flex border border-gray-400 rounded">
              <div class="flex flex-auto flex-wrap"></div>
              <input placeholder="Search by anything" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">
              <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                  <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                  </button>
              </div>
          </div>
        </li>

        <li class="h-8 w-8 ml-3">
          <button title="Notifications" aria-label="notifications" class="w-full h-full text-white bg-gray-600 rounded focus:outline-none focus:shadow-outline">
            <i>
              <svg class="fill-current w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />
              </svg>
            </i>
          </button>
        </li>

        <li class="h-8 w-8 ml-3">
          <button title="Notifications" aria-label="notifications"
            class="w-full h-full text-white bg-gray-600 rounded focus:outline-none focus:shadow-outline">
            <i class="fas fa-th-large text-base"></i>
          </button>
        </li>

        <li class="h-10 w-10 ml-3">
          <ProfileAction />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: false,
      },
    },
    
  }

</script>

<style>

</style>

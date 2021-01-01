<template>
  <div>
    <nav style="height: 58px;" aria-label="top bar" class="flex-none flex justify-between border-b bg-white">
      <!-- top bar left -->
      <ul aria-label="top bar left" aria-orientation="horizontal" class="flex">
        <!-- add button -->
        <li class="group relative">
          <button @click="isOpen = !isOpen" aria-controls="add" aria-expanded="false" aria-haspopup="listbox" class="flex items-center h-full px-4 text-sm focus:outline-none">
            <i>
              <svg class="fill-current w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24">
                <path d="M24 10h-10v-10h-2v10h-10v2h10v10h2v-10h10z" />
              </svg>
            </i>
            <span class="ml-2">Add</span>
          </button>
          <span class="absolute p-1 group-hover:block" :class="{ hidden: !isOpen }" >
            <ul id="add" role="listbox"
              class="outline-none py-2 bg-white border rounded-md w-screen max-w-md w-dropdown-large shadow-lg focus:outline-none leading-relaxed">
              <li role="separator" class="mb-2">
                <label class="block px-4 py-3 font-semibold">
                  New
                </label>
                <hr />
              </li>
              <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                Ticket
              </li>
              <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                User
              </li>
              <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                Organization
              </li>
              <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                Search
              </li>
              <li role="separator" class="mb-2">
                <label class="block px-4 py-3 font-semibold">Recently Viewed</label>
                <hr />
              </li>
              <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                <div class="flex">
                  <div class="pr-2">
                    <span style="padding: 2px 5px; font-size: 0.7rem;" class="font-mono rounded-sm bg-red-600 text-white leading-none">O</span>
                  </div>
                  <div class="flex-1">
                    <p>Vertias - ams opps issue</p>
                    <p class="text-gray-600">
                      <span>#ticket/14352</span>
                      <span class="mx-1 font-black">&#183;</span>
                      <span>Nico Braun</span>
                    </p>
                  </div>
                </div>
              </li>
              <li role="option"
                class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                <div class="flex">
                  <div class="pr-2">
                    <span style="padding: 2px 5px; font-size: 0.7rem;"
                      class="font-mono rounded-sm bg-yellow-400 text-black leading-none">N</span>
                  </div>
                  <div class="flex-1">
                    <p>Vertias - ams opps issue</p>
                    <p class="text-gray-600">
                      <span>#ticket/14352</span>
                      <span class="mx-1 font-black">&#183;</span>
                      <span>Nico Braun</span>
                    </p>
                  </div>
                </div>
              </li>
              <li role="option"
                class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                <div class="flex">
                  <div class="pr-2">
                    <span style="padding: 2px 5px; font-size: 0.7rem;"
                      class="font-mono rounded-sm bg-gray-500 text-white leading-none">S</span>
                  </div>
                  <div class="flex-1">
                    <p>Vertias - ams opps issue</p>
                    <p class="text-gray-600">
                      <span>#ticket/14352</span>
                      <span class="mx-1 font-black">&#183;</span>
                      <span>Nico Braun</span>
                    </p>
                  </div>
                </div>
              </li>
              <li role="option"
                class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                <div class="flex">
                  <div class="pr-2">
                    <span style="padding: 2px 5px; font-size: 0.7rem;"
                      class="font-mono rounded-sm bg-blue-600 text-white leading-none">P</span>
                  </div>
                  <div class="flex-1">
                    <p>Vertias - ams opps issue</p>
                    <p class="text-gray-600">
                      <span>#ticket/14352</span>
                      <span class="mx-1 font-black">&#183;</span>
                      <span>Nico Braun</span>
                    </p>
                  </div>
                </div>
              </li>

              <li role="option"
                class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                <div class="flex">
                  <div class="pr-2">
                    <span style="padding: 2px 5px; font-size: 0.7rem;"
                      class="font-mono rounded-sm bg-gray-800 text-white leading-none">H</span>
                  </div>
                  <div class="flex-1">
                    <p>Vertias - ams opps issue</p>
                    <p class="text-gray-600">
                      <span>#ticket/14352</span>
                      <span class="mx-1 font-black">&#183;</span>
                      <span>Nico Braun</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </span>
        </li>
      </ul>

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

    <!-- section body header -->
    <header aria-label="page caption" class="flex-none flex h-16 bg-gray-100 border-b px-4 items-center">
      <h1 id="page-caption" class="font-semibold text-lg">Dashboard</h1>
    </header>
  </div>
</template>

<script>
  export default {
    props: {
      pageTitle: {
        type: String,
        required: false,
      },
    },
    data() {
      return {
        isOpen: false
      }
    },
  }

</script>

<style>

</style>

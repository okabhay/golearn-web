<template>
  <ul aria-label="top bar left" aria-orientation="horizontal" class="flex">
    <li v-click-outside="hideDropdown" class="group relative">
      <button @click="isOpen = !isOpen" aria-controls="add" aria-expanded="false" aria-haspopup="listbox" class="flex items-center h-full px-4 text-sm focus:outline-none">
        <i>
          <svg class="fill-current w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24">
            <path d="M24 10h-10v-10h-2v10h-10v2h10v10h2v-10h10z" />
          </svg>
        </i>
        <span class="ml-2">Add</span>
      </button>
      <span class="absolute p-1 group-hover:block z-50" :class="{ hidden: !isOpen }">
        <ul id="add" role="listbox" class="outline-none py-2 bg-white border rounded-md w-screen max-w-md w-dropdown-large shadow-lg focus:outline-none leading-relaxed">
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
          <li role="option"
            class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
            <div class="flex">
              <div class="pr-2">
                <span style="padding: 2px 5px; font-size: 0.7rem;"
                  class="font-mono rounded-sm bg-red-600 text-white leading-none">O</span>
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
                <span style="padding: 2px 5px; font-size: 0.7rem;" class="font-mono rounded-sm bg-yellow-400 text-black leading-none">N</span>
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
                <span style="padding: 2px 5px; font-size: 0.7rem;" class="font-mono rounded-sm bg-gray-500 text-white leading-none">S</span>
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
                <span style="padding: 2px 5px; font-size: 0.7rem;" class="font-mono rounded-sm bg-blue-600 text-white leading-none">P</span>
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
                <span style="padding: 2px 5px; font-size: 0.7rem;" class="font-mono rounded-sm bg-gray-800 text-white leading-none">H</span>
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
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
        hideDropdown() {
            this.isOpen = false;
        }
    },
  }

</script>

<template>
  <div>
    <PageHeader title="Dashboard">
      <template v-slot:action>
        <t-button @click="showModal=true" type="button" class="py-3">Refresh</t-button>
      </template>
    </PageHeader>
    <!-- component -->
    <div class="flex mx-6 mt-10 gap-2">
      <div class="w-full lg:w-1/4">
        <div class="widget w-full p-4 rounded bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col">
              <div class="text-xs uppercase font-bold text-gray-700">
                Customers
              </div>
              <div class="text-xl font-bold">
                23
              </div>
            </div>
            <svg class="stroke-current text-gray-500" fill="none" height="24" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">
              </path>
              <circle cx="9" cy="7" r="4">
              </circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87">
              </path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75">
              </path>
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/4">
        <div class="widget w-full p-4 rounded bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col">
              <div class="text-xs uppercase font-bold text-gray-700">
                Courses
              </div>
              <div class="text-xl font-bold">
                07
              </div>
            </div>
            <svg class="stroke-current text-gray-500" fill="none" height="24" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24"
              xmlns="http://www.w3.org/2000/svg">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12">
              </polyline>
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/4">
        <div class="widget w-full p-4 rounded bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col">
              <div class="text-xs uppercase font-bold text-gray-700">
                Payments
              </div>
              <div class="text-xl font-bold">
                Rs. 4078
              </div>
            </div>
            <svg class="stroke-current text-gray-500" fill="none" height="24" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
              </path>
              <polyline points="15 3 21 3 21 9">
              </polyline>
              <line x1="10" x2="21" y1="14" y2="3">
              </line>
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/4">
        <div class="widget w-full p-4 rounded bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col">
              <div class="text-xs uppercase font-bold text-gray-700">
                Watch Time
              </div>
              <div class="text-xl font-bold">
                31h 2m
              </div>
            </div>
            <svg class="stroke-current text-gray-500" fill="none" height="24" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10">
              </circle>
              <polyline points="12 6 12 12 16 14">
              </polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>
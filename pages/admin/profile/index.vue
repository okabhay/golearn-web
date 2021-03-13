<template>
  <div>
    <div class="bg-white p-2 border-b border-gray-300 pr-4 flex items-center justify-between">
      <div class="flex items-center">
        <t-button to="/admin/dashboard/" type="button" variant="secoundry" class="py-3 border-r focus:ring-0">
          <span class="fas fa-arrow-left"> Go Back</span>
        </t-button>
        <h2 class="text-lg font-semibold ml-4">My Profile</h2>
      </div>
      <t-button type="button" variant="error" class="py-3 border-r focus:ring-0">
        <span class="fas fa-trash"> Delete</span>
      </t-button>
    </div>
    <div class="mx-auto lg:w-2/4 px-12 py-1">
      <div class="bg-white border p-12 w-full justify-center items-center overflow-hidden rounded shadow-sm mx-auto mb-6">
        <div class="shadow mx-auto h-24 w-24 border-white rounded-full overflow-hidden border-4">
          <img class="object-cover w-full h-full"
            src="https://www.kindpng.com/picc/m/41-415494_profile-picture-in-circle-hd-png-download.png">
        </div>
        <div class="flex flex-col justify-center items-center mt-6">
          <h1 class="text-xl text-center font-semibold">
            Radhika Singh
          </h1>
          <p class="text-sm text-gray-600 bg-gray-200 text-center border rounded-full py-1 px-4 my-2 inline">
            radhika.shing@gmail.com
          </p>
        </div>
        <div class="flex justify-center my-6 space-x-3">
          <button
            class="inline-block p-3 text-center text-white transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
            <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clip-rule="evenodd" />
            </svg>
          </button>
          <button
            class="inline-block p-3 text-center text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none">
            <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd" />
            </svg>
          </button>
          <button
            class="inline-block p-3 text-center text-white transition border border-yellow-500 rounded-full ripple hover:bg-yellow-100 focus:outline-none">
            <svg class="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        </div>
        <div class="my-6">
          <h3 class="mx-6 text-xl text-center font-semibold">About Us</h3>
          <div class="mt-6 pt-3 mx-6 border-t text-center">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In placeat eligendi autem. Sunt modi soluta
              nostrum, saepe, quia beatae harum rem reprehenderit deserunt qui praesentium dolor aspernatur aliquam hic
              fuga.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In placeat eligendi autem. Sunt modi soluta
              nostrum, saepe, quia beatae harum rem reprehenderit deserunt qui praesentium dolor aspernatur aliquam hic
              fuga.</p>
          </div>
        </div>
      </div>
      <!-- component -->
      <Security />
      <SocialContacts class="my-6" />
      <NotificationSettings />
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'main'
  }

</script>

<template>
  <div>
    <button title="Page Menu" @click="isOpen = !isOpen" class="h-full w-full rounded-full border focus:outline-none focus:shadow-outline">
        <img class="h-full w-full rounded-full mx-auto" src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/me.jpg" />
    </button>

    <div style="background-color: #2a2a2e; width:19rem;" class="absolute right-2 mt-2 text-white rounded shadow-lg overflow-hidden z-20" :class="{hidden: !isOpen}">
        <div class="py-2">
            <a href="#" class="flex flex-col items-center px-4 py-2 border-b border-black">
                <div class="my-4 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
                    <div class="relative shadow mx-auto h-16 w-16 rounded-full overflow-hidden border-4">
                        <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80">
                    </div>
                    <div class="mt-6">
                        <h1 class="text-lg text-center font-semibold"> Cassie Robert</h1>
                        <p class="text-sm text-gray-200 text-center">
                            cassie.robert@infotech.com
                        </p>
                    </div>
                </div>
            </a>
            <nuxt-link to="/admin/profile" class="flex items-center px-4 py-2 border-b border-black hover:bg-red-500">
                <i class="fas fa-user-circle text-lg mr-4"></i>
                <p>MY PROFILE</p>
            </nuxt-link>
            <nuxt-link to="/admin/settings" class="flex items-center px-4 py-2 border-b border-black hover:bg-red-500">
                <i class="fas fa-cog text-lg mr-4"></i>
                <p>SETTINGS</p>
            </nuxt-link>
            <a href="#" class="flex items-center px-4 py-2 hover:bg-red-500">
                <i class="fas fa-sign-out-alt text-lg mr-4"></i>
                <p>LOG OUT</p>
            </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
}
</script>
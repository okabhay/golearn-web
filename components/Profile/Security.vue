<template>
    <div class="bg-white border rounded shadow-sm">
        <nuxt-link to="/password-reset/123" class="flex justify-between items-center px-6 py-4 border-b">
            <p class="text-sm font-medium w-72">Change User Password</p>
            <i class="fas fa-arrow-right fa-lg text-gray-500"></i>
        </nuxt-link>
        <nuxt-link to="/" class="flex justify-between items-center px-6 py-4 border-b">
            <p class="text-sm font-medium w-72">Change User Role</p>
            <i class="fas fa-arrow-right fa-lg text-gray-500"></i>
        </nuxt-link>
        <nuxt-link to="/admin/profile" class="flex justify-between items-center px-6 py-4">
            <p class="text-sm font-medium w-72">Change User Status</p>
            <i class="fas fa-arrow-right fa-lg text-gray-500"></i>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    
}
</script>
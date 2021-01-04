<template>
    <div class="bg-white border rounded shadow-sm">
        <div class="p-6 border-b">
            <h4 class="text-base font-medium">Social contact</h4>
            <p class="text-xs">Provide your social contact for user to communicate with you.</p>
        </div>
        <div class="flex justify-between items-center p-6 border-b">
            <i class="fab fa-2x pr-6 text-blue-500 fa-facebook-square"></i>
            <p class="text-base font-medium w-72">Facebook Messanger</p>
            <t-input type="text" v-model="links.facebook" placeholder="Your facebook link" />
            <t-toggle class="ml-6" />
        </div>
        <div class="flex justify-between items-center p-6 border-b">
            <i class="fab fa-2x pr-6 text-green-500 fa-whatsapp-square"></i>
            <p class="text-base font-medium w-72">WhatsApp</p>
            <t-input type="text" v-model="links.whatsApp" placeholder="Your mobile number" />
            <t-toggle class="ml-6" checked />
        </div>
        <div class="flex justify-between items-center p-6">
            <i class="fas fa-2x pr-6 text-red-500 fa-at"></i>
            <p class="text-base font-medium w-72">Gmail</p>
            <t-input type="text" v-model="links.email" placeholder="Your email" />
            <t-toggle class="ml-6" checked />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: {
                facebook: '',
                whatsApp: '+91 9876543210',
                email: 'example@gmail.com'
            }
        }
    },
}
</script>
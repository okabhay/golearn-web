<template>
    <div class="bg-white border rounded shadow-sm">
        <div class="p-6 border-b">
            <h4 class="text-base font-medium">Email notification</h4>
            <p class="text-xs">Provide your social contact for user to communicate with you.</p>
        </div>
        <div class="flex justify-between items-center px-6 py-4 border-b">
            <p class="text-sm font-medium w-72">Send me email on password reset.</p>
            <t-toggle checked class="ml-6" />
        </div>
        <div class="flex justify-between items-center px-6 py-4 border-b">
            <p class="text-sm font-medium w-72">Notify me on every purchases.</p>
            <t-toggle checked class="ml-6" />
        </div>
        <div class="flex justify-between items-center px-6 py-4 border-b">
            <p class="text-sm font-medium w-72">Send me promotional and offer emails.</p>
            <t-toggle class="ml-6" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>
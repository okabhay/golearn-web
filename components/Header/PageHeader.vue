<template>
    <header aria-label="page caption" class="flex flex-wrap justify-between px-6 pt-6 items-center">
        <div>
            <h1 id="page-caption" class="font-semibold text-lg">{{title}}</h1>
            <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="flex item-center gap-2">
            <slot name="action"></slot>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
    },
}
</script>
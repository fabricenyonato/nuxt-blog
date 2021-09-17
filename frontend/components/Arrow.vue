<template>
    <button class="h-16 text-2xl w-4 relative">
        <font-awesome-icon icon="long-arrow-alt-down" class="absolute top-0 left-0" id="arrow" />
    </button>
</template>

<style scoped>
#arrow {
    animation-duration: 3s;
    animation-name: a0;
    animation-iteration-count: infinite;
}

@keyframes a0 {
    0% {
        opacity: 0;
        top: 0px;
    }

    20% {
        opacity: 1;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        top: 30px;
    }
}

</style>

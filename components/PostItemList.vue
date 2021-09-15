<template>
    <div class="flex flex-row post-item gap-8">
        <NuxtLink :to="'/' + post.id" class="h-96 flex-shrink-0 flex-grow-0" style="flex-basis: 67%;">
            <img :src="post.image" :alt="post.title" class="rounded object-cover object-center h-full w-full" />
        </NuxtLink>

        <div style="flex-basis: 33%;">
            <div class="text-gray-500 mb-4">{{formatDate(post.publish_at)}}</div>
            <NuxtLink :to="'/' + post.id" class="text-3xl font-bold post-item__title">{{post.title}}</NuxtLink>

            <div class="flex-row gap-4 mt-8 post-item__share hidden">
                <div class="rounded bg-gray-200 h-12 w-12 flex justify-center items-center cursor-pointer">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="" />
                </div>

                <div class="rounded bg-gray-200 h-12 w-12 flex justify-center items-center cursor-pointer">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="" />
                </div>

                <div class="rounded bg-gray-200 h-12 w-12 flex justify-center items-center cursor-pointer">
                    <font-awesome-icon :icon="['fab', 'instagram']" class="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {formatDate} from '../js/util';

export default {
    props: {post: Object},

    methods: {
        formatDate,
    }
}
</script>

<style scoped>
.post-item:hover .post-item__title {
    color: #00000080;
}

.post-item:hover .post-item__share {
    display: flex;
}
</style>

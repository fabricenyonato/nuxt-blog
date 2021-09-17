<template>
    <NuxtLink :to="'/' + post.slug" class="flex flex-row block mb-6">
        <img :src="post.image" :alt="post.title" class="rounded h-20 w-20 flex-shrink-0 flex-grow-0 object-cover object-center" />

        <div class="flex flex-col justify-between pl-6">
            <h3 class="text-base mb-2">{{post.title}}</h3>
            <div class="text-sm text-gray-500">{{formatDate(post.published_at)}}</div>
        </div>
    </NuxtLink>
</template>

<script>
import {formatDate} from '../js/util';

export default {
    props: {post: Object},

    methods: {
        formatDate,
    }
};
</script>

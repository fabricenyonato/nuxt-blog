<template>
    <div class="flex flex-col post-item">
        <NuxtLink :to="'/' + post.slug" class="h-96 w-full flex-shrink-0 flex-grow-0 relative">
            <img :src="post.image" :alt="post.title" class="rounded object-cover object-center h-full w-full absolute top-0 left-0" />

            <div class="absolute left-8 bottom-0 flex flex-row p-3 items-center post-item__date font-bold" style="background: var(--primary-color);">
                <div class="text-4xl mr-4">{{day}}</div>

                <div class="text-xs" style="color: #000000b3;">
                    <div>{{year}}</div>
                    <div>{{month}}</div>
                </div>
            </div>
        </NuxtLink>

        <div class="p-8">
            <NuxtLink :to="'/' + post.slug" class="text-2xl font-bold post-item__title">{{post.title}}</NuxtLink>

            <p class="my-4 text-gray-500">Duis sollicitudin aliquam elit. Praesent molestie odio nec eros consequat ultrices. Nullam tincidunt ex nec tincidunt rutrum.</p>

            <NuxtLink :to="'/' + post.slug" class="post-item__read-more text-gray-500">
                <font-awesome-icon icon="long-arrow-alt-right" />
                <span class="ml-2">read more</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    props: {post: Object},

    data() {
        return {
            day: '',
            month: '',
            year: '',
        };
    },

    created() {
        const date = moment(this.post.published_at).format('DD-MMMM-YYYY').split('-');

        this.day = date[0];
        this.month = date[1];
        this.year = date[2];
    }
};
</script>

<style scoped>
.post-item:hover .post-item__title {
    color: #00000080;
}

.post-item:hover .post-item__read-more {
    color: #000;
}

.post-item__date::before {
    content: '';
    position: absolute;
    left: 40px;
    bottom: -5px;
    background-color: var(--primary-color);
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
}
</style>

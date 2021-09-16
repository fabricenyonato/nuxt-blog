<template>
    <Page>
        <template v-slot:header>
            <div class="flex flex-col justify-center h-full">
                <div class="text-lg">Hello! Welcome to</div>

                <div style="font-size: 10vw; font-weight: 700;">nuxt forest</div>

                <p class="text-lg w-3/5">Aenean vel consequat diam. Integer pulvinar velit nec arcu eleifend, sed tristique ex semper. Proin vel nibh ultrices, aliquet ex eget, scelerisque massa. Sed aliquet dolor metus, quis venenatis velit sodales at. Phasellus a dui nec neque sollicitudin feugiat ac eu dolor. Proin sapien metus, viverra sit amet massa in, blandit lacinia est.</p>
            </div>
        </template>

        <template v-slot:main>
            <div class="my-8">
                <button @click="display = 'list'" class="h-8 w-8 rounded text-gray-600" :class="{'bg-gray-200': display === 'list'}">
                    <font-awesome-icon icon="list" />
                </button>

                <button @click="display = 'grid'" class="h-8 w-8 rounded text-gray-600" :class="{'bg-gray-200': display === 'grid'}">
                    <font-awesome-icon icon="th" />
                </button>
            </div>

            <div class="flex flex-col gap-8" v-if="display === 'list'">
                <PostItemList v-for="post of posts" :key="post.id" :post="post" />
            </div>

            <div class="grid grid-cols-3 gap-8" v-else>
                <PostItemGrid v-for="post of posts" :key="post.id" :post="post" />
            </div>

            <div class="my-8">
                load more
            </div>
        </template>
    </Page>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
            display: 'list',
        };
    },

    async asyncData() {
        const r = await fetch('http://localhost:1337/posts');
        const posts = await r.json();

        return {
            posts
        };
    },
};
</script>

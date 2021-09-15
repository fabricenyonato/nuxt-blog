<template>
    <Page>
        <template v-slot:header>
            <div class="flex flex-col justify-center h-full">
                <div class="text-lg">Hello! Welcome to</div>

                <div style="font-size: 10vw; font-weight: 700;">nuxt blog</div>

                <p class="text-lg w-3/5">Aenean vel consequat diam. Integer pulvinar velit nec arcu eleifend, sed tristique ex semper. Proin vel nibh ultrices, aliquet ex eget, scelerisque massa. Sed aliquet dolor metus, quis venenatis velit sodales at. Phasellus a dui nec neque sollicitudin feugiat ac eu dolor. Proin sapien metus, viverra sit amet massa in, blandit lacinia est.</p>
            </div>
        </template>

        <template v-slot:main>
            <div class="my-8">
                grid, list
            </div>

            <div class="flex flex-col gap-8">
                <PostItemList v-for="post of posts" :key="post.id" :post="post" />
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
        };
    },

    async asyncData() {
        const r = await fetch('http://localhost:3001/posts');
        const posts = await r.json();

        return {
            posts
        };
    }
}
</script>

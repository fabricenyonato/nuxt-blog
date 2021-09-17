<template>
    <Page>
        <template v-slot:header>
            <div class="flex flex-col justify-center h-full">
                <h1 class="font-bold text-8xl mb-8">{{post.title}}</h1>
                <Arrow />
            </div>
        </template>

        <template v-slot:main>
            <div class="my-8 flex flex-row gap-8">
                <div style="flex-basis: 67%;">
                    <img :src="post.image" :alt="post.title" class="w-full rounded" />

                    <div class="mt-8">{{post.content}}</div>
                </div>

                <div style="flex-basis: 33%;">
                    <SearchBar />

                    <h3 class="font-bold text-xl py-4">latest news</h3>

                    <PostItemSmall v-for="post in latest" :key="post.id" class="flex flex-row block mb-6" :post="post" />
                </div>
            </div>
        </template>
    </Page>
</template>

<script>
export default {
    data() {
        return {
            post: null,
            latest: [],
        };
    },

    async asyncData(ctx) {
        const slug = ctx.params.slug;

        const r0 = await fetch('http://localhost:1337/posts?slug=' + slug);
        const posts = await r0.json();

        const r1 = await fetch('http://localhost:1337/posts/?_limit=2&_sort=published_at:DESC');
        const latest = await r1.json();

        return {
            post: posts[0],
            latest,
        };
    },

    head() {
        const title = this.post && this.post.title;
        return {title};
    },
};
</script>

<template>
    <Page>
        <template v-slot:header>
            <div class="flex flex-col justify-center h-full">
                <h1 class="font-bold text-8xl mb-16">{{post.title}}</h1>
            </div>
        </template>

        <template v-slot:main>
            <div class="my-8 flex flex-row gap-8">
                <div style="flex-basis: 67%;">
                    <img :src="post.image" :alt="post.title" class="w-full rounded" />

                    <div class="mt-8">{{post.body}}</div>
                </div>

                <div style="flex-basis: 33%;">right</div>
            </div>
        </template>
    </Page>
</template>

<script>
export default {
    data() {
        return {
            post: null,
        };
    },

    async asyncData(ctx) {
        const id = ctx.params.id;

        const r = await fetch('http://localhost:3001/posts/' + id);
        const post = await r.json();

        return {
            post,
        };
    },

    head() {
        const title = this.post && this.post.title;
        return {title};
    }
}
</script>

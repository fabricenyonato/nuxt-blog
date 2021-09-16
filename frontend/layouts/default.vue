<template>
    <div>
        <Nuxt />

        <Footer :latest="latest" />
    </div>
</template>

<script>
export default {
    data() {
        const latest = [
            {
                id: '419a824d-7cee-4624-8579-779bf3fb6df4',
                title: 'In dictum ante quam, et congue neque viverra at',
                published_at: new Date(),
                image: 'https://preview.colorlib.com/theme/readit/images/ximage_1.jpg.pagespeed.ic.ndb4JOHu-q.webp',
            },
            {
                id: '69b25f19-86fb-4d4d-9fc0-ff47d1efe8c6',
                title: 'In dictum ante quam, et congue neque viverra at',
                published_at: new Date(),
                image: 'https://preview.colorlib.com/theme/readit/images/ximage_1.jpg.pagespeed.ic.ndb4JOHu-q.webp',
            },
        ];

        return {
            latest,
        };
    },
}
</script>

<style>
:root {
    --primary-color: rgb(0, 220, 130);
    --secondary-color: rgb(128, 238, 192);
}

body {
    font-family: 'Poppins', sans-serif;
}
</style>

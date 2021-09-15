<template>
    <div>
        <Nuxt />

        <footer id="footer" class="py-16">
            <div class="container mx-auto">
                <div class="grid grid-cols-4 gap-8">
                    <div>
                        <NuxtLink to="/" style="font-size: 34px;" class="mb-10">
                            <Logo />
                        </NuxtLink>

                        <p>Nullam eleifend purus at porttitor lobortis. Fusce interdum bibendum sodales. Nam viverra purus non lectus ullamcorper convallis.</p>
                    </div>

                    <div>
                        <h2 class="text-2xl font-semibold mb-10 text-white">latest news</h2>

                        <NuxtLink to="/" v-for="post in latest" :key="post.id" class="flex flex-row block mb-6">
                            <img :src="post.image" :alt="post.title" class="rounded h-20 w-20 mr-4 flex-shrink-0 flex-grow-0" />

                            <div class="flex flex-col justify-between">
                                <h3 class="text-base mb-2">{{post.title}}</h3>
                                <div class="text-sm text-gray-500">{{formatDate(post.published_at)}}</div>
                            </div>
                        </NuxtLink>
                    </div>

                    <div>
                        <h2 class="text-2xl font-semibold mb-10 text-white">information</h2>

                        <NuxtLink to="/" class="mb-4 text-white block">
                            <font-awesome-icon icon="chevron-right" style="font-size: 0.80rem;" class="mr-2" />
                            <span>home</span>
                        </NuxtLink>

                        <NuxtLink to="/" class="mb-4 text-white block">
                            <font-awesome-icon icon="chevron-right" style="font-size: 0.80rem;" class="mr-2" />
                            <span>articles</span>
                        </NuxtLink>

                        <NuxtLink to="/abount" class="mb-4 text-white block">
                            <font-awesome-icon icon="chevron-right" style="font-size: 0.80rem;" class="mr-2" />
                            <span>about</span>
                        </NuxtLink>

                        <NuxtLink to="/contact" class="mb-4 text-white block">
                            <font-awesome-icon icon="chevron-right" style="font-size: 0.80rem;" class="mr-2" />
                            <span>contact</span>
                        </NuxtLink>
                    </div>

                    <div>
                        <h2 class="text-2xl font-semibold mb-10 text-white">have a questions ?</h2>

                        <div href="#" class="mb-4 flex flex-row">
                            <font-awesome-icon icon="map-marker-alt" class="mr-6 mt-1 text-white" />
                            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>

                        <a href="#" class="mb-4 text-white flex flex-row items-center">
                            <font-awesome-icon icon="phone-alt" class="mr-6" />
                            <span>+2 392 3929 210</span>
                        </a>

                        <a href="#" class="mb-4 text-white flex flex-row items-center">
                            <font-awesome-icon icon="envelope" class="mr-6" />
                            <span>info@yourdomain.com</span>
                        </a>
                    </div>
                </div>

                <div class="text-center mt-16">Aenean gravida condimentum velit, et viverra elit molestie nec</div>
            </div>
        </footer>
    </div>
</template>

<script>
import {formatDate} from '../js/util';

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

    methods: {
        formatDate,
    }
}
</script>

<style>
body {
    font-family: 'Poppins', sans-serif;
}

#footer {
    background-color: #212832;
    color: #ffffffb3;
}

#footer a:hover {
    color: #ffd369;
}
</style>

<template>
    <footer id="footer" class="py-16">
        <div class="container mx-auto">
            <div class="grid grid-cols-4 gap-8">
                <div>
                    <NuxtLink to="/" style="font-size: 34px;">
                        <Logo />
                    </NuxtLink>

                    <p class="py-8">Nullam eleifend purus at porttitor lobortis. Fusce interdum bibendum sodales. Nam viverra purus non lectus ullamcorper convallis.</p>

                    <div class="flex flex-row gap-4">
                        <a href="#" class="rounded-full h-12 w-12 flex justify-center items-center" style="background: #2d3436cc;">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </a>

                        <a href="#" class="rounded-full h-12 w-12 flex justify-center items-center" style="background: #2d3436cc;">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </a>

                        <a href="#" class="rounded-full h-12 w-12 flex justify-center items-center" style="background: #2d3436cc;">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                    </div>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold mb-10 text-white">latest news</h2>

                    <NuxtLink :to="'/' + post.slug" v-for="post in latest" :key="post.id" class="flex flex-row block mb-6">
                        <img :src="post.image" :alt="post.title" class="rounded h-20 w-20 flex-shrink-0 flex-grow-0" />

                        <div class="flex flex-col justify-between pl-6">
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
</template>

<script>
import {formatDate} from '../js/util';

export default {
    data() {
        return {latest: []};
    },

    methods: {
        formatDate,
    },

    async fetch() {
        const r = await fetch('http://localhost:1337/posts/?_limit=2&_sort=published_at:DESC');
        this.latest = await r.json();
    }
};
</script>

<style>
#footer {
    background-color: #001e26;
    color: #ffffffb3;
}

#footer a:hover {
    color: var(--primary-color);
}
</style>

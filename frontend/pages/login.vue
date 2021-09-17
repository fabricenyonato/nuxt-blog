<template>
    <div class="container mx-auto">
        <form @submit.prevent="login" class="w-96 py-8">
            <h1 class="text-2xl pb-4 font-bold">login</h1>

            <div class="mb-4">
                <input v-model="email" type="email" required class="border border-gray-300 rounded p-2 outline-none w-full focus:border-black" placeholder="email" />
            </div>

            <div class="mb-4">
                <input type="password" v-model="pwd" required class="border border-gray-300 rounded p-2 outline-none w-full focus:border-black" placeholder="password" />
            </div>

            <button type="submit" class="bg-gray-200 rounded py-2 px-4 outline-none">login</button>
        </form>
    </div>
</template>

<script>
export default {
    layout: 'auth',

    data() {
        return {
            email: 'dev@nuxt.org',
            pwd: 'dev@nuxt.org',
        };
    },

    methods: {
        async login() {
            const data = {identifier: this.email, password: this.pwd};
            await this.$auth.loginWith('local', {data});
        },
    },

    head: {title: 'login'},
};
</script>

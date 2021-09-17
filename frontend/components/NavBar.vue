<template>
    <nav id="navbar">
        <div class="container mx-auto flex flex-row justify-between items-center py-4 text-white">
            <NuxtLink to="/" style="font-size: 26px;">
                <Logo />
            </NuxtLink>

            <div class="flex flex-row gap-4 text-lg">
                <a href="#">about</a>
                <a href="#">contact</a>

                <NuxtLink to="/login" v-if="!$auth.loggedIn">login</NuxtLink>
                <NuxtLink to="/register" v-if="!$auth.loggedIn">register</NuxtLink>

                <a href="#" v-if="$auth.loggedIn" @click="$auth.logout()">logout</a>
                <NuxtLink to="/me" v-if="$auth.loggedIn">{{$auth.user.email}}</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<style>
#navbar {
    z-index: 1;
    transition: .3s all ease-out;
    background-position: center;
    background-size: cover;
}

#navbar.navbar--show {
    position: fixed;
    top: 0px;
    right: 0;
    left: 0;

    background-image:
        linear-gradient(rgba(0, 30, 38, 0.7), rgba(0, 30, 38, 0.7)),
        url('https://i.pinimg.com/originals/ef/48/d2/ef48d217dc8e23a49277afc4dcf403c3.png');

    transform: translateY(0%);
}

#navbar.navbar--hidden {
    position: fixed;
    top: 0px;
    right: 0;
    left: 0;

    background-image:
        linear-gradient(rgba(0, 30, 38, 0.7), rgba(0, 30, 38, 0.7)),
        url('https://i.pinimg.com/originals/ef/48/d2/ef48d217dc8e23a49277afc4dcf403c3.png');

    transform: translateY(-100%);
}

#navbar.navbar--showing {
    position: fixed;
    top: 0px;
    right: 0;
    left: 0;

    background-image:
        linear-gradient(rgba(0, 30, 38, 0.7), rgba(0, 30, 38, 0.7)),
        url('https://i.pinimg.com/originals/ef/48/d2/ef48d217dc8e23a49277afc4dcf403c3.png');

    transition: none;
    transform: translateY(-100%);
}
</style>

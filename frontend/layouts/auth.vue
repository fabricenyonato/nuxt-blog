<template>
    <div class="flex flex-col min-h-screen">
        <div id="auth-navbar" class="flex-grow-0 flex-shrink-0">
            <NavBar />
        </div>

        <div class="flex-grow flex-shrink">
            <Nuxt />
        </div>

        <div class="flex-grow-0 flex-shrink-0">
            <Footer />
        </div>
    </div>
</template>

<style scoped>
#auth-navbar {
    background-image:
        linear-gradient(rgba(0, 30, 38, 0.7), rgba(0, 30, 38, 0.7)),
        url('https://i.pinimg.com/originals/ef/48/d2/ef48d217dc8e23a49277afc4dcf403c3.png');
}
</style>

<template>
    <div>
        <header id="header" class="text-white flex flex-col">
            <div class="flex-grow-0 flex-shrink-0">
                <NavBar />
            </div>

            <div class="container mx-auto flex-grow flex-shrink">
                <slot name="header"></slot>
            </div>
        </header>

        <main class="container mx-auto">
            <slot name="main"></slot>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {navbar: null};
    },

    mounted() {
        this.navbar = document.querySelector('#navbar');

        // this.onWindowScroll();
        // addEventListener('scroll', this.onWindowScroll);
    },

    destroyed() {
        // removeEventListener('scroll', this.onWindowScroll);
    },

    methods: {
        onWindowScroll() {
            const navbarHeight = this.navbar.offsetHeight;

            if ((0 < scrollY) && (scrollY <= navbarHeight)) {
                this.navbar.classList.remove('navbar--hidden');
                this.navbar.classList.remove('navbar--fixed');
            }

            if ((navbarHeight < scrollY) && (scrollY < innerHeight)) {
                this.navbar.classList.add('navbar--hidden');
                this.navbar.classList.remove('navbar--fixed');
            }

            if (innerHeight <= scrollY) {
                this.navbar.classList.add('navbar--fixed');
                this.navbar.classList.remove('navbar--hidden');
            }
        }
    }
};
</script>

<style>
#header {
    /* background-color: rgba(0, 30, 38, 0.8); */
    /* linear-gradient(45deg, rgba(0, 30, 38, 0.8) 0%, rgba(0, 220, 130, 0.8) 100%), */
    /* linear-gradient(45deg, rgba(242, 0, 255, 0.8) 0%, rgba(255, 186, 66, 0.8) 100%), */
    background-image:
        linear-gradient(rgba(0, 30, 38, 0.7), rgba(0, 30, 38, 0.7)),
        url('https://i.pinimg.com/originals/ef/48/d2/ef48d217dc8e23a49277afc4dcf403c3.png');

    background-position: center;
    background-size: cover;
    height: 100vh;
}
</style>

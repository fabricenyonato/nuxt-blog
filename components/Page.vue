<template>
    <div>
        <header id="header" class="text-white flex flex-col">
            <div class="flex-grow-0 flex-shrink-0">
                <Nav />
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

<style>
#header {
    background-image:
        linear-gradient(45deg, rgba(242, 0, 255, 0.8) 0%, rgba(255, 186, 66, 0.8) 100%),
        url('https://preview.colorlib.com/theme/readit/images/xbg_1.jpg.pagespeed.ic.N8Wtgh_Hsu.webp');

    background-position: center;
    height: 100vh;
}
</style>

<template>
    <div class="p-4 bg-light dark:bg-custom-dark border-2 border-solid border-gray-100 rounded-lg relative flex
                flex-column dark:border-gray-800">
        <div class="md:p-8 lg:p-8 xl:p-8 pb-6">
            <div class="flex items-start xs:flex-column sm:flex-column w-full">
                <img class="h-5 mr-8 o-80 dark:invert-100" src="/icons/photo-edit-icon.svg" alt="">

                <div class="xs:mt-2 sm:mt-2 dark:text-light">
                    <h2>Responsive Grid Made Easy</h2>
                    <p class="mt-2 text-sm lh-lg text-gray-600 dark:text-gray-100">
                        <strong>Lume<span class="text-flame">CSS</span></strong> Grid is a lightweight, flexible layout
                        system that helps you build responsive designs effortlessly - minimal code, maximum control.
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-dotted bg-light-gray rounded-lg p-4 flex items-center justify-center h-full overflow-hidden">
            <div class="carousel carousel-slide max-w-20 w-full h-20 relative overflow-visible" data-carousel-move-interval="3000">
                <div class="carousel-inner duration-300">
                    <div class="carousel-item relative">
                        <div class="max-w-18 w-full h-18 absolute top-half left-half -translate-x-half -translate-y-half border-1
                                    border-gray-300 border-solid z-1">
                            <div class="bg-dark trans-20-bg backdrop-blur-xs absolute top-half left-half -translate-x-half
                                        -translate-y-half z-1 w-15 w-full h-15"></div>
                        </div>
                    </div>
                    <div class="carousel-item relative">
                        <div class="max-w-18 w-full h-18 absolute top-half left-half -translate-x-half -translate-y-half border-1
                                    border-gray-300 border-solid z-1">
                            <div class="bg-dark trans-20-bg backdrop-sepia-80 absolute top-half left-half -translate-x-half
                                        -translate-y-half z-1 max-w-15 w-full h-15"></div>
                        </div>
                    </div>
                    <div class="carousel-item relative">
                        <div class="max-w-18 w-full h-18 absolute top-half left-half -translate-x-half -translate-y-half border-1
                                    border-gray-300 border-solid z-1">
                            <div class="bg-dark trans-20-bg backdrop-hue-rotate-45 absolute top-half left-half -translate-x-half
                                        -translate-y-half z-1 max-w-15 w-full h-15"></div>
                        </div>
                    </div>
                    <div class="carousel-item relative">
                        <div class="max-w-18 w-full h-18 absolute top-half left-half -translate-x-half -translate-y-half border-1
                                    border-gray-300 border-solid z-1">
                            <div class="bg-dark trans-20-bg backdrop-invert-100 absolute top-half left-half -translate-x-half
                                        -translate-y-half z-1 max-w-15 w-full h-15"></div>
                        </div>
                    </div>
                </div>

                <!-- Carousel image -->
                <div class="carousel-img absolute top-half left-half -translate-x-half -translate-y-half
                            w-15 h-15 max-w-15 max-h-15 bg-center bg-cover bg-no-repeat overflow-hidden"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.carousel-img {
    background-image: url("/images/chameleon-img.jpg");
}
</style>
<script setup lang="ts">
</script>
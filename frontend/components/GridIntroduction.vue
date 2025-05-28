<template>
    <div class="p-4 bg-light dark:bg-custom-dark border-2 border-solid border-gray-100 rounded-lg mb-2 flex flex-column
                h-full dark:border-gray-800">
        <div class="md:p-8 lg:p-8 xl:p-8 pb-6">
            <div class="flex items-start xs:flex-column sm:flex-column w-full">
                <img class="h-5 mr-8 o-80 dark:invert-100" src="/icons/grid-icon.svg" alt="">

                <div class="xs:mt-2 sm:mt-2 dark:text-light">
                    <h2>Responsive Grid Made Easy</h2>
                    <p class="mt-2 text-sm lh-lg text-gray-600 dark:text-gray-100">
                        <strong>Lume<span class="text-flame">CSS</span></strong> Grid is a lightweight, flexible layout
                        system that helps you build responsive designs effortlessly - minimal code, maximum control.
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-dotted bg-light-gray rounded-lg p-4 flex items-center justify-center h-full">
            <div class="w-40 row gap-1">
                <div class="col-4-xl col-4-lg col-4-md col-12-sm col-12-xs relative min-h-10">
                    <div class="w-full h-full overflow-hidden xl:rounded-l-lg lg:rounded-l-lg md:rounded-l-lg
                                sm:rounded-t-lg xs:rounded-t-lg">
                        <div class="w-full h-full bg-center bg-cover bg-no-repeat grid-img-1 duration-700 ease-in
                                    hover:scale-1.2">
                            <div class="w-full h-full hover:bg-dark hover:trans-70-bg hover:backdrop-blur-xs duration-300
                                        ease flex justify-center items-center text-transparent hover:text-light">
                                col-4
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-8-xl col-8-lg col-8-md col-12-sm col-12-xs flex flex-column pr-0">
                    <div class="w-full h-full relative row w-full gap-1">
                        <div class="col-6 h-10 mt-0 pt-0 relative">
                            <div class="w-full h-full overflow-hidden">
                                <div class="w-full h-full bg-center bg-cover bg-no-repeat grid-img-2 duration-700 ease-in
                                            hover:scale-1.2">
                                    <div class="w-full h-full hover:bg-dark hover:trans-70-bg hover:backdrop-blur-xs
                                                duration-300 ease flex justify-center items-center text-transparent
                                                hover:text-light">
                                        col-6
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 h-10 mt-0 pt-0 pr-0 relative">
                            <div class="w-full h-full overflow-hidden md:rounded-se-lg lg:rounded-se-lg xl:rounded-se-lg">
                                <div class="w-full h-full bg-center bg-cover bg-no-repeat grid-img-3 duration-700 ease-in
                                            hover:scale-1.2">
                                    <div class="w-full h-full hover:bg-dark hover:trans-70-bg hover:backdrop-blur-xs
                                                duration-300 ease flex justify-center items-center text-transparent
                                                hover:text-light">
                                        col-6
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 h-10 mb-0 pb-0 pr-0 relative">
                            <div class="w-full h-full overflow-hidden rounded-ee-lg sm:rounded-es-lg xs:rounded-es-lg">
                                <div class="w-full h-full bg-center bg-cover bg-no-repeat grid-img-4 duration-700 ease-in
                                            hover:scale-1.2">
                                    <div class="w-full h-full hover:bg-dark hover:trans-70-bg hover:backdrop-blur-xs
                                                duration-300 ease flex justify-center items-center text-transparent
                                                hover:text-light">
                                        col-12
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .grid-img-1 {
        background-image: url("/images/grid-1-img.jpg");
        background-size: cover !important;
        background-position: center !important;
        transition: all 10s linear !important;

        & > div {
            transition: background-color 1000ms ease !important;
        }
    }

    .grid-img-2 {
        background-image: url("/images/grid-2-img.jpg");
        background-size: cover !important;
        background-position: center !important;
        transition: all 10s linear !important;

        & > div {
            transition: background-color 1000ms ease !important;
        }
    }

    .grid-img-3 {
        background-image: url("/images/grid-3-img.jpg");
        background-size: cover !important;
        background-position: center !important;
        transition: all 10s linear !important;

        & > div {
            transition: background-color 1000ms ease !important;
        }
    }

    .grid-img-4 {
        background-image: url("/images/grid-4-img.jpg");
        background-size: cover !important;
        background-position: center !important;
        transition: all 10s linear !important;

        & > div {
            transition: background-color 1000ms ease !important;
        }
    }
</style>
<script setup lang="ts">
</script>
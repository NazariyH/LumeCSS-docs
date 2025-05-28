<template>
    <div class="p-4 bg-light dark:bg-custom-dark border-2 border-solid border-gray-100 rounded-lg h-full flex flex-column
                dark:border-gray-800">
        <div class="md:p-8 lg:p-8 xl:p-8 pb-6">
            <div class="flex items-start xs:flex-column sm:flex-column w-full">
                <img class="h-5 mr-8 o-80 dark:invert-100" src="/icons/layers-icon.svg" alt="">

                <div class="xs:mt-2 sm:mt-2 dark:text-light">
                    <h2>Transform Your World in 2D</h2>
                    <p class="mt-2 text-sm lh-lg text-gray-600 dark:text-gray-100">
                        Bring depth to your designs with <strong>Lume<span class="text-flame">CSS</span></strong> 2D
                        transforms. Rotate, scale, and translate elements in 2D space - all with clean, intuitive syntax.
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-dotted min-h-20 bg-light-gray rounded-lg px-4 flex items-center justify-center h-full">

            <div class="relative w-15 -rotate-15 h-15 rounded-lg border-1 border-solid border-gray-300 p-2">
                <div class="w-full h-full border-2 border-dashed border-gray-300 rounded-lg">
                    <div class="absolute w-full h-full top-0 left-0 bg-gray-400 o-10 rounded-lg"></div>

                    <img class="absolute top-0 left-0 w-full h-full rotate-30 translate-x-5 rounded-lg scale-0.8
                                hover:rotate-0 hover:translate-x-0 hover:scale-1 ease duration-2000"
                         src="/images/bird-img.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
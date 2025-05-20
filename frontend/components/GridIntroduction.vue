<template>
    <div class="p-4 bg-light border-1 border-solid border-gray-300 rounded-lg mb-2">
        <div class="p-8 pb-6">
            <div class="flex items-start">
                <img class="h-5 mr-8 o-80" src="/icons/grid-icon.svg" alt="">

                <div>
                    <h2>Responsive Grid Made Easy</h2>
                    <p class="mt-2 text-sm lh-lg text-gray-600">
                        <strong>Lume<span class="text-flame">CSS</span></strong> Grid is a lightweight, flexible layout
                        system that helps you build responsive designs effortlessly - minimal code, maximum control.
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-dotted bg-gray-100 rounded-lg p-4 flex items-center justify-center h-full">
            <div class="w-40 row gap-1">
                <div class="col-4-xl col-4-lg col-4-md col-12-sm col-12-xs relative min-h-12">
                    <div class="w-full h-full overflow-hidden xl:rounded-l-lg lg:rounded-l-lg md:rounded-l-lg
                                sm:rounded-t-lg xs:rounded-t-lg bg-center bg-cover bg-no-repeat grid-img-1">

                    </div>
                </div>
                <div class="col-8-xl col-8-lg col-8-md col-12-sm col-12-xs flex flex-column pr-0">
                    <div class="w-full h-full relative row w-full gap-1">
                        <div class="col-6 h-12 mt-0 pt-0 relative">
                            <div class="w-full h-full overflow-hidden bg-center bg-cover bg-no-repeat grid-img-2">

                            </div>
                        </div>
                        <div class="col-6 h-12 mt-0 pt-0 pr-0 relative">
                            <div class="w-full h-full overflow-hidden md:rounded-se-lg lg:rounded-se-lg xl:rounded-se-lg
                                        bg-center bg-cover bg-no-repeat grid-img-3">

                            </div>
                        </div>
                        <div class="col-12 h-12 mb-0 pb-0 pr-0 relative">
                            <div class="w-full h-full overflow-hidden rounded-ee-lg sm:rounded-es-lg xs:rounded-es-lg
                                        bg-center bg-cover bg-no-repeat grid-img-4">

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
    }

    .grid-img-2 {
        background-image: url("/images/grid-2-img.jpg");
    }

    .grid-img-3 {
        background-image: url("/images/grid-3-img.jpg");
    }

    .grid-img-4 {
        background-image: url("/images/grid-4-img.jpg");
    }
</style>

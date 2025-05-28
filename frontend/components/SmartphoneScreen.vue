<template>
    <div class="w-full h-full bg-dotted rounded-lg min-h-20 flex justify-center pt-4 bg-light-gray attachment-fixed
                border-2 border-solid border-gray-100 overflow-hidden dark:border-gray-800">
        <!-- Smartphone screen -->
        <div class="phone-screen relative h-full border-10 border-solid border-b-0 rounded-lg rounded-b-none
                    relatives bg-light mt-auto">

            <!-- Smartphone notch -->
            <div class="relative w-full rounded-t-md h-2 overflow-hidden">
                <div class="notch h-0.5 bg-dark row">
                    <div class="col-3 min-h-2 bg-light rounded-se-sm flex justify-center items-center">
                        <span data-current-time class="text-sm">00:00</span>
                    </div>
                    <div class="col-6 min-h-2 bg-dark rounded-b-lg"></div>
                    <div class="col-3 min-h-2 bg-light rounded-ss-sm flex justify-center items-center">
                        <img src="/icons/signal-icon.svg" class="h-0.75" alt="">
                        <img src="/icons/battery-icon.svg" class="h-0.75 ml-2" alt="">
                    </div>
                </div>
            </div>


            <!-- Carousel -->
            <div class="px-4 mt-8">
                <h1>Why LumeCSS?</h1>
                <div class="carousel carousel-fade w-full h-auto min-h-15"
                     data-carousel-move-interval="3000">
                    <div class="carousel-indicators circle"></div>

                    <div class="carousel-inner">
                        <div class="carousel-item px-0">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-header">
                                        <h1 class="card-title">Light as Air, Fast as Lightning</h1>
                                    </div>
                                    <div class="card-body">
                                        <p>
                                            Minimal code, maximum speed. Blink and it's loaded.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item px-0">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-header">
                                        <h1 class="card-title">Responsive by Default</h1>
                                    </div>
                                    <div class="card-body">
                                        <p>
                                            No extra work — just works on all screens.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item px-0">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-header">
                                        <h1 class="card-title">Dark Mode? We Got You</h1>
                                    </div>
                                    <div class="card-body">
                                        <p>
                                            Flip between light and dark like a pro.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item px-0">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-header">
                                        <h1 class="card-title">Zero Setup. Just Style</h1>
                                    </div>
                                    <div class="card-body">
                                        <p>
                                            Plug it in and go. No config, no headaches.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item px-0">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-header">
                                        <h1 class="card-title">Clean Code, No Drama</h1>
                                    </div>
                                    <div class="card-body">
                                        <p>
                                            Say goodbye to messy CSS. It’s all tidy and simple.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Smartphone buttons -->
            <div class="absolute top-0 left-0 w-full h-half">
                <div class="relative w-full h-full">
                    <div class="relative h-half w-full">
                        <div class="absolute top-half left-0 -translate-x-full w-0.5 h-1.75 flex">
                            <span class="-translate-x-half w-0.25 h-1.75 bg-dark rounded-l-xs"></span>
                        </div>
                    </div>

                    <div class="relative h-half w-full">
                        <div class="absolute top-half left-0 -translate-y-half -translate-x-full w-0.5 h-7 flex flex-column
                                    justify-between">
                            <span class="-translate-x-half w-0.25 h-3 bg-dark rounded-l-xs"></span>
                            <span class="-translate-x-half w-0.25 h-3 bg-dark rounded-l-xs"></span>
                        </div>

                        <div class="absolute top-half -translate-y-half translate-x-full right-0 w-0.5 h-6 flex">
                            <span class="absolute right-0 translate-x-half w-0.25 h-6 bg-dark rounded-r-xs"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
.phone-screen {
    width: 340px;
    height: 440px !important;
    max-height: 440px !important;
}
</style>
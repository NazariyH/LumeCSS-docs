<template>
    <div class="w-full h-full bg-dotted rounded-lg min-h-20 flex justify-center pt-4 bg-gray-100 attachment-fixed
                border-1 border-solid border-gray-300 overflow-hidden">
        <!-- Smartphone screen -->
        <div class="phone-screen h-full border-10 border-solid border-b-0 rounded-lg rounded-b-none overflow-hidden
                    relatives bg-light">

            <!-- Smartphone notch -->
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
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
.phone-screen {
    width: 340px;
}
</style>
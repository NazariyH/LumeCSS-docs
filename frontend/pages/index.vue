<template>
    <div class="wrapper bg-diagonal border-1 border-y-0 border-gray-300 border-solid px-4">
        <div class="container bg-light justify-between row p-0 border-1 border-y-0 border-solid border-gray-300 pt-10">
            <!-- Introduction -->
            <div class="col-12-xs col-12-sm col-12-md col-7-lg col-8-xl px-8 py-4">
                <div>
                    <div class="absolute left-0 w-screen h-0.5 border-1 border-x-0 border-b-0 border-solid
                                -translate-y-2 border-gray-200"></div>
                </div>

                <h1 class="xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-medium lh-none">
                    Illuminate your site with style and speed
                </h1>

                <div>
                    <div class="absolute left-0 w-screen h-0.5 border-1 border-x-0 border-b-0 border-solid
                                translate-y-2 border-gray-200"></div>
                </div>


                <div class="mt-12">
                    <div class="absolute left-0 w-screen h-0.5 border-1 border-x-0 border-b-0 border-solid
                                -translate-y-1 border-gray-200"></div>
                </div>

                <div class="row">
                    <p class="text-md col-10 lh-lg">
                        <strong>Lume<span class="text-flame">CSS</span></strong> is a lightweight, customizable SCSS
                        library that helps you build fast, responsive designs with utilities like <strong
                        class="text-flame">flexbox grids</strong>, <strong class="text-flame">spacing shortcuts</strong>,
                        and <strong class="text-flame">typography classes</strong>.
                    </p>
                </div>

                <div class="mb-12">
                    <div class="absolute left-0 w-screen h-0.5 border-1 border-x-0 border-b-0 border-solid
                                translate-y-1 border-gray-200"></div>
                </div>

                <div>
                    <div class="absolute left-0 w-screen h-0.5 border-1 border-x-0 border-b-0 border-solid
                                border-gray-200"></div>
                </div>

                <a href="#get-started" class="btn-sm btn-outline-dark">Get started</a>

                <div>
                    <div class="absolute left-0 w-screen h-0.5 border-1 border-x-0 border-b-0 border-solid
                                border-gray-200"></div>
                </div>
            </div>
            <div class="col-12-xs col-12-sm col-12-md col-5-lg col-4-xl p-4 z-2">
                <SmartphoneScreen/>
            </div>
        </div>

        <div class="container bg-gray-100 p-2 pb-1 justify-between row md:flex-wrap-reverse sm:flex-wrap-reverse
                    border-1 border-solid border-gray-300 xs:flex-wrap-reverse p-0 rounded-lg rounded-b-none border-b-0
                    overflow-hidden rounded-t-none">
            <div class="col-12-xs col-12-sm col-12-md col-6-lg col-6-xl rounded-lg lg:pr-1 xl:pr-1">
                <TerminalPlay/>
            </div>

            <div class="col-12-xs col-12-sm col-12-md col-6-lg col-6-xl overflow-hidden md:mb-2 sm:mb-2
                        xs:mb-2 lg:pl-1 xl:pl-1">

                <ColorPalette />
            </div>
        </div>

        <div class="container bg-gray-100 p-0 px-2 pt-1 border-gray-300 border-solid border-1 border-y-0 row">
            <!-- CDN integration -->
            <div class="col-12-xs col-12-sm col-12-md col-6-lg col-6-xl bg-gray-100 overflow-hidden
                        xl:rounded-se-lg lg:pr-1 xl:pr-1">

                <CdnSetup />
            </div>

            <!-- Integration via package manager -->
            <div class="col-12-xs col-12-sm col-12-md col-6-lg col-6-xl bg-gray-100 lg:pl-1 xl:pl-1">
                <PackageMannagerSetup />
            </div>
        </div>


        <div class="container bg-gray-100 p-0 px-2 pt-2 border-gray-300 border-solid border-1 border-y-0 row">
            <!-- Dark theme introduction -->
            <div class="col-12-xs col-12-sm col-12-md col-7-lg col-7-xl bg-gray-100 lg:pr-1 xl:pr-1">
                <DarkThemeIntroduction />
            </div>


            <!-- 2D transforms -->
            <div class="col-12-xs col-12-sm col-12-md col-5-lg col-5-xl bg-gray-100 lg:pl-1 xl:pl-1 flex">
                <Transforms />
            </div>
        </div>

        <div class="container bg-gray-100 p-0 px-2 pt-2 border-gray-300 border-solid border-1 border-y-0 row">
            <!-- Dark theme introduction -->
            <div class="col-12-xs col-12-sm col-12-md col-7-lg col-7-xl bg-gray-100 lg:pr-1 xl:pr-1">
                <GridIntroduction />
            </div>


            // 2D transforms
            <div class="col-12-xs col-12-sm col-12-md col-5-lg col-5-xl bg-gray-100 lg:pl-1 xl:pl-1 flex">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, totam.
            </div>
        </div>
    </div>
</template>

<script setup>
// Components
import SmartphoneScreen from "../components/SmartphoneScreen.vue"
import TerminalPlay from "../components/TerminalPlay.vue"
import ColorPalette from "../components/ColorPalette.vue"
import CdnSetup from "../components/CdnSetup.vue"
import PackageMannagerSetup from "../components/PackageMannagerSetup.vue"
import DarkThemeIntroduction from "../components/DarkThemeIntroduction.vue"
import Transforms from "../components/Transforms.vue";
import GridIntroduction from "../components/GridIntroduction.vue";

const { copyToClipboard } = useClipboard(); // Import the copy to clipboard function
</script>

<style lang="scss">
.wrapper {
    width: 100%;
    max-width: 1500px;
    margin: auto;
}
</style>
<template>
    <div class="h-full flex flex-column">
        <div class="p-4 bg-light dark:bg-custom-dark border-2 border-solid border-gray-100 rounded-lg mb-2
                    dark:border-gray-800">
            <div class="flex items-start md:p-8 lg:p-8 xl:p-8 pb-6 xs:flex-column sm:flex-column w-full">
                <img class="h-5 mr-8 o-80 dark:invert-100" src="/icons/planet-icon.svg" alt="">

                <div class="dark:text-light xs:mt-2 sm:mt-2">
                    <h2>CDN Integration</h2>
                    <p class="mt-2 text-sm text-gray-600 lh-lg dark:text-gray-100">
                        Easily connect to <strong>Lume<span class="text-flame">CSS</span></strong> via CDN
                        for fast load times, no installation, and instant access to the latest version.
                    </p>
                </div>
            </div>


            <!-- CSS CDN -->
            <div class="bg-dark rounded-sm mb-4 flex justify-between items-center py-4 pr-4 text-sm">
                            <pre class="bg-transparent py-0 my-0"><code class="language-html">{{
                                    cdnCSSLink
                                }}</code></pre>
                <img class="h-1 cursor-pointer ml-4 icon-white" src="/icons/clipboard-icon.svg"
                     @click="copyToClipboard($event, cdnCSSLink)" alt="copy">
            </div>

            <div class="bg-dark rounded-sm flex justify-between items-center py-4 pr-4 text-sm">
                            <pre class="bg-transparent py-0 my-0"><code class="language-html">{{
                                    cdnJSLink
                                }}</code></pre>
                <img class="h-1 cursor-pointer ml-4 icon-white" src="/icons/clipboard-icon.svg"
                     @click="copyToClipboard($event, cdnJSLink)" alt="">
            </div>

            <p class="my-4 text-sm lh-lg text-gray-600 dark:text-gray-100">
                You're all set to vibe with <strong>Lume<span class="text-flame">CSS</span></strong>
                features! Just drop that CDN link and let the magic happen.
            </p>

            <NuxtLink to="/" class="btn-sm btn-dark rounded-sm dark:btn-light">docs</NuxtLink>
        </div>

        <div class="p-4 bg-light dark:bg-custom-dark border-2 border-solid border-gray-100 rounded-lg h-full
                    dark:border-gray-800">
            <div class="flex items-start md:p-8 lg:p-8 xl:p-8 pb-6 xs:flex-column sm:flex-column w-full">
                <img class="h-4 mr-8 o-80 dark:invert-100" src="/icons/scale-icon.svg" alt="">

                <div class="xs:mt-2 sm:mt-2 dark:text-light">
                    <h2>CDN or Package Manager</h2>
                    <p class="mt-2 text-sm text-gray-600 lh-lg dark:text-gray-100">
                        Get started quickly using a CDN link or install <strong>Lume<span
                        class="text-flame">CSS</span></strong> via npm, choose the method that best fits
                        your
                        project workflow.
                    </p>
                </div>
            </div>

            <p class="text-sm text-gray-600 lh-lg dark:text-gray-100">
                The CDN method lets you quickly include <strong>Lume<span
                class="text-flame">CSS</span></strong> with a simple link tag, ideal for prototypes or small
                projects, while npm installation integrates <strong>Lume<span class="text-flame">CSS</span></strong>
                into your build process for better version control and scalability.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const { copyToClipboard } = useClipboard(); // Import the copy to clipboard function

// CDN CSS and JS link
const cdnCSSLink = ref('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lumecss/dist/lume.css">')
const cdnJSLink = ref('<script src="https://cdn.jsdelivr.net/npm/lumecss/dist/lume.js"></' + 'script>')
</script>

<style lang="scss"></style>
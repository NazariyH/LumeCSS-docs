<template>
    <div class="h-full flex flex-column">
        <div class="p-4 bg-light border-1 border-solid border-gray-300 rounded-lg mb-2">
            <div class="flex items-start p-8 pb-6">
                <img class="h-5 mr-8 o-80" src="/icons/planet-icon.svg" alt="">

                <div>
                    <h2>CDN Integration</h2>
                    <p class="mt-2 text-sm text-gray-600 lh-lg">
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

            <p class="my-4 text-sm lh-lg text-gray-600">
                You're all set to vibe with <strong>Lume<span class="text-flame">CSS</span></strong>
                features! Just drop that CDN link and let the magic happen.
            </p>

            <NuxtLink to="/" class="btn-sm btn-dark rounded-sm">docs</NuxtLink>
        </div>

        <div class="p-4 bg-light border-1 border-solid border-gray-300 rounded-lg h-full">
            <div class="flex items-start p-8 pb-6">
                <img class="h-4 mr-8 o-80" src="/icons/scale-icon.svg" alt="">

                <div>
                    <h2>CDN or Package Manager</h2>
                    <p class="mt-2 text-sm text-gray-600 lh-lg">
                        Get started quickly using a CDN link or install <strong>Lume<span
                        class="text-flame">CSS</span></strong> via npm, choose the method that best fits
                        your
                        project workflow.
                    </p>
                </div>
            </div>

            <p class="text-sm text-gray-600 lh-lg">
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

// CDN CSS and JS link
const cdnCSSLink = ref('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lumecss/dist/lume.css">')
const cdnJSLink = ref('<script src="https://cdn.jsdelivr.net/npm/lumecss/dist/lume.js"></' + 'script>')
</script>

<style lang="scss"></style>
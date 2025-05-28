<template>
    <div class="bg-light-gray bg-dotted rounded-lg xs:mt-2 sm:mt-2 md:mt-2 p-4 border-2 border-solid border-gray-100
                dark:border-gray-800">
        <div class="rounded-lg bg-light dark:bg-custom-dark p-4 border-2 border-solid border-gray-100 dark:border-gray-800">
            <div class="flex items-start md:p-8 lg:p-8 xl:p-8 pb-6 sm:flex-column xs:flex-column w-full">
                <img class="h-5 mr-8 o-80 dark:invert-100" src="/icons/box-icon.svg" alt="">

                <div class="xs:mt-2 sm:mt-2 dark:text-light">
                    <h2>Install via package manager</h2>
                    <p class="mt-2 text-sm text-gray-600 lh-lg dark:text-gray-100">
                        Install via your favorite package manager with a single command. Stay up to date and
                        get started quickly!
                    </p>
                </div>
            </div>

            <div class="bg-dark rounded-sm flex justify-between items-center pt-2 pl-2 pr-4 text-sm pb-4">
                <div class="flex flex-column w-full">
                    <span class="pb-2 o-70">terminal</span>
                    <pre class="bg-transparent py-0 my-0 pl-2"><code
                        class="language-sh">{{ installViaNpmCommand }}</code></pre>
                </div>
                <div class="ml-4 inline-block">
                    <img class="h-1 cursor-pointer icon-white" src="/icons/clipboard-icon.svg"
                         @click="copyToClipboard($event, installViaNpmCommand)" alt="copy">
                </div>
            </div>

            <p class="text-sm lh-lg text-gray-600 my-4 dark:text-gray-100">
                To get started with <strong>Lume<span class="text-flame">CSS</span></strong>, simply install
                it via your preferred package manager. Once added to your project, you can import and use
                its clean, customizable styles right away.
            </p>

            <div class="bg-dark rounded-sm flex justify-between items-center pt-2 pl-2 pr-4 text-sm pb-4">
                <div class="flex flex-column w-full">
                    <span class="pb-2 o-70">terminal</span>
                    <pre class="bg-transparent py-0 my-0 pl-2"><code
                        class="language-sh">{{ buildLumecssCommand }}</code></pre>
                </div>
                <div class="ml-4 inline-block">
                    <img class="h-1 cursor-pointer icon-white" src="/icons/clipboard-icon.svg"
                         @click="copyToClipboard($event, buildLumecssCommand)" alt="copy">
                </div>
            </div>

            <p class="text-sm lh-lg text-gray-600 my-4 dark:text-gray-100">
                You can purge unused styles and generate compiled <strong>lumecss.min.css</strong> and
                <strong>lumecss.min.js</strong> files to any directory by specifying a custom output path
                during the build process. This helps keep your assets clean and organized for deployment.
            </p>

            <!-- Carousel -->
            <div class="carousel terminal-carousel carousel-fade p-0 m-0 w-full rounded-sm mb-4"
                 data-carousel-move-interval="5000" data-theme="dark">

                <div>
                    <div class="carousel-inner bg-dark bg-dotted text-sm">
                        <!-- For React -->
                        <div class="carousel-item bg-dark px-0 pt-0">
                            <div class="bg-dark rounded-sm flex justify-between items-start pt-2 pb-4 pl-2 pr-0 w-full">
                                <div class="flex flex-column overflow-x-scroll w-full">
                                    <div class="flex justify-between w-full">
                                        <span class="pb-2 o-70">index.js or main.jsx</span>

                                        <img class="h-1 cursor-pointer icon-white" src="/icons/clipboard-icon.svg"
                                             @click="copyToClipboard($event, linkLumecssForReact)" alt="copy">
                                    </div>
                                    <pre class="bg-transparent py-0 my-0 pl-2"><code
                                        class="language-javascript">{{ linkLumecssForReact }}</code></pre>
                                </div>
                            </div>
                        </div>

                        <!-- For Angular -->
                        <div class="carousel-item bg-dark px-0 pt-0">
                            <div class="bg-dark rounded-sm flex justify-between items-start pt-2 pb-4 pl-2 pr-0 w-full">
                                <div class="flex flex-column overflow-x-scroll w-full">
                                    <div class="flex justify-between w-full">
                                        <span class="pb-2 o-70">angular.json</span>

                                        <img class="h-1 cursor-pointer icon-white"
                                             src="/icons/clipboard-icon.svg"
                                             @click="copyToClipboard($event, linkLumecssForAngular)" alt="copy">
                                    </div>
                                    <pre class="bg-transparent py-0 my-0 pl-2"><code
                                        class="language-javascript">{{ linkLumecssForAngular }}</code></pre>
                                </div>
                            </div>
                        </div>

                        <!-- For Vue -->
                        <div class="carousel-item bg-dark px-0 pt-0">
                            <div class="bg-dark rounded-sm flex justify-between items-start pt-2 pb-4 pl-2 pr-0 w-full">
                                <div class="flex flex-column overflow-x-scroll w-full">
                                    <div class="flex justify-between w-full">
                                        <span class="pb-2 o-70">main.js</span>

                                        <img class="h-1 cursor-pointer icon-white" src="/icons/clipboard-icon.svg"
                                             @click="copyToClipboard($event, linkLumecssForVue)" alt="copy">
                                    </div>
                                    <pre class="bg-transparent py-0 my-0 pl-2"><code
                                        class="language-javascript">{{ linkLumecssForVue }}</code></pre>
                                </div>
                            </div>
                        </div>

                        <!-- For Nuxt -->
                        <div class="carousel-item bg-dark px-0 pt-0">
                            <div class="bg-dark rounded-sm flex justify-between items-start pt-2 pb-4 pl-2 pr-0 w-full">
                                <div class="flex flex-column overflow-x-scroll w-full">
                                    <div class="flex justify-between w-full">
                                        <span class="pb-2 o-70">nuxt.config.ts</span>

                                        <img class="h-1 cursor-pointer icon-white"
                                             src="/icons/clipboard-icon.svg"
                                             @click="copyToClipboard($event, linkLumecssForNuxt)" alt="copy">
                                    </div>
                                    <pre class="bg-transparent py-0 my-0 pl-2"><code
                                        class="language-javascript">{{ linkLumecssForNuxt }}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carousel-indicators"></div>
            </div>

            <p class="text-sm lh-lg text-gray-600 mt-4 dark:text-gray-100">
                Depending on the framework you're using, the way you import <strong>Lume<span
                class="text-flame">CSS</span></strong> may vary. Use the slider above to find the
                appropriate setup for your platform, whether it's Nuxt, Vue, React, or Angular. Each snippet
                shows how to include the <strong>lumecss.min.css</strong> and
                <strong>lumecss.min.js</strong> files in your project.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const { copyToClipboard } = useClipboard(); // Import the copy to clipboard function

// Installation via npm Command
const installViaNpmCommand = ref('$ npm install lumecss')

// Command for building LumeCSS
const buildLumecssCommand = ref('npx lumecss lumecss:build --output ./path')

// Commands for linking LumeCSS for different platforms
const linkLumecssForNuxt = ref(`
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/path/lumecss.min.css' }
      ],
      script: [
        { src: '/path/lumecss.min.js', type: 'text/javascript', defer: true }
      ]
    }
  }
})`)

const linkLumecssForVue = ref(`
import { createApp } from 'vue'
import App from './App.vue'

// Import LumeCSS
import '/path/lumecss.min.css'
import '/path/lumecss.min.js'

createApp(App).mount('#app')`)

const linkLumecssForReact = ref(`
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import LumeCSS
import '/path/lumecss.min.css'
import '/path/lumecss.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)`)


const linkLumecssForAngular = ref(`
"styles": [
  "src/lumecss.min.css"
],
"scripts": [
  "src/lumecss.min.js"
]`)


</script>

<style lang="scss">
.terminal-carousel {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;

    .carousel-indicators {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0;
        margin: 0;
        position: static;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        transform: translate(0, 0);

        .carousel-indicator {
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: #212529;
            border-right: 0.05rem solid #F8F9FA;
            transition: all 300ms ease-in-out;
            width: 100%;
            height: 40px;
            margin: 0;

            &:last-child {
                border-right: none;
            }

            &::before {
                color: white;
                display: inline-block;
            }

            // React
            &:nth-child(1) {
                &::before {
                    content: 'React';
                }
                &.active {
                    background-color: #61dafb;
                }
            }

            // Angular
            &:nth-child(2) {
                &::before {
                    content: 'Angular';
                }
                &.active {
                    background-color: #dd0031;
                }
            }

            // Vue
            &:nth-child(3) {
                &::before {
                    content: 'Vue';
                }
                &.active {
                    background-color: #42b883;
                }
            }

            // Nuxt
            &:nth-child(4) {
                &::before {
                    content: 'Nuxt';
                }
                &.active {
                    background-color: #00c58e;
                }
            }
        }
    }
}
</style>
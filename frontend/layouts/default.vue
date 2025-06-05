<template>
    <div>
        <!-- Navbar -->
        <nav class="navbar xl:px-16 lg:px-16 md:px-8 sm:px-8 xs:px-8 border-1 border-gray-100 dark:border-gray-800
                    border-solid border-x-0 border-t-0 dark:bg-custom-dark">
            <div>
                <NuxtLink to="/" class="navbar-brand">
                    <img src="/icons/lumecss-logo.svg" class="mr-2" alt="LumeCSS">
                    <strong>Lume<span class="text-flame">CSS</span></strong>
                </NuxtLink>

                <ul class="navbar-menu hidden md:flex lg:flex xl:flex">
                    <li class="nav-item">
                        <NuxtLink to="/" exact-active-class="text-flame" class="nav-link">Docs</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/" exact-active-class="text-flame" class="nav-link">Examples</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/" exact-active-class="text-flame" class="nav-link">Blog</NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="hidden md:flex lg:flex xl:flex">
                <button data-toggle="modal" data-target="#search-box">
                    <img class="h-1.5 hover:scale-1.1 ease duration-200 text-dark-400 dark:invert-100"
                         src="/icons/search-icon.svg">
                </button>

                <button class="toggle-theme theme-btn ml-3 o-90 scale-0.8"><i class="icon"></i></button>

                <hr class="mx-3 h-1.5 divider-vertical">

                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <img class="h-1.5 hover:scale-1.1 ease duration-200 text-dark-400 dark:invert-100"
                         src="/icons/github-icon.svg" alt="Github profile">
                </a>
            </div>

            <div class="navbar-toggle hidden sm:block xs:block">
                <span class="navbar-toggle-line col-12"></span>
                <span class="navbar-toggle-line col-6"></span>
                <span class="navbar-toggle-line col-10"></span>
            </div>

            <div class="navbar-collapse navbar-collapse-full dark:bg-custom-dark">
                <ul class="navbar-collapse-menu">
                    <li class="nav-item">
                        <NuxtLink to="/" exact-active-class="text-flame" class="nav-link">Docs</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/" exact-active-class="text-flame" class="nav-link">Examples</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/" exact-active-class="text-flame" class="nav-link">Blog</NuxtLink>
                    </li>
                </ul>

                <div class="mt-3">
                    <a href="https://github.com/NazariyH" target="_blank" rel="noopener noreferrer">
                        <img class="h-1.5 hover:scale-1.1 ease duration-200 text-dark-400 dark:invert-100"
                             src="/icons/github-icon.svg" alt="Github profile">
                    </a>

                    <button class="toggle-theme theme-btn ml-3 o-90 scale-0.8"><i class="icon"></i></button>

                    <hr class="divider-vertical mx-4 h-1.5">

                    <button data-toggle="modal" data-target="#search-box">
                        <img class="h-1.5 hover:scale-1.1 ease text-dark-400 duration-200 dark:invert-100"
                             src="/icons/search-icon.svg">
                    </button>
                </div>
            </div>
        </nav>

        <!-- Modal (search bar) -->
        <div id="search-box" class="modal">
            <div class="modal-dialog max-w-35">
                <div class="modal-content">
                    <div class="modal-header">
                        <form class="input-group row">
                            <input id="search-field" type="search" class="form-control-none border-solid
                            border-1 border-flame col-10 border-r-none caret-flame pl-4" placeholder="Search docs">
                            <label for="search-field" class="btn btn-xs btn-transparent border-solid
                            border-1 border-flame border-l-none col-2">
                                <button type="reset" class="btn-close btn-close-flame scale-0.7"></button>
                            </label>
                        </form>
                    </div>
                    <hr class="divider">
                    <div class="modal-body"></div>
                </div>
            </div>
        </div>


        <!-- Cursor circles container -->
        <AnimatedCursor/>


        <!-- Output the page content -->
        <div>
            <slot/>
        </div>

        <!-- Footer -->
        <div class="wrapper bg-diagonal border-1 border-y-0 border-gray-100 border-solid  dark:border-gray-800
                    relative">
            <footer class="container bg-light dark:bg-custom-dark border-1 border-y-0 border-solid border-gray-100
                    dark:border-gray-800 dark:text-light p-4 pt-30 pb-0">
                <div>
                    <div class="absolute left-0 w-screen h-0.5 border-1 border-x-0 border-b-0 border-solid
                                border-gray-200 dark:border-gray-800"></div>
                </div>

                <div class="row gap-3">
                    <div class="col-12-xs col-12-sm col-12-md col-6-lg col-6-xl py-0">
                        <div class="border-solid border-0 border-gray-100 dark:border-gray-800 h-full px-0 py-8 xs:border-0
                                    sm:border-0 md:border-0 lg:border-r-1 xl:border-r-1 lg:pr-4 xl:pr-4">
                            <h1 class="tex-2xl font-medium lh-none mt-2">
                                Modern CSS That Just Works
                            </h1>

                            <p class="text-md lh-lg text-gray-600 dark:text-gray-100 max-w-45 my-4">
                                Yeah, I know-the introduction page suspiciously resembles Tailwind’s one.
                            </p>

                            <p>© 2025 LumeCSS. All rights reserved.</p>
                        </div>
                    </div>

                    <div class="col-12-xs col-6-sm col-6-md col-3-lg col-2-xl py-0">
                        <div class="border-0 px-0 border-solid border-gray-100 dark:border-gray-800 h-full py-8
                                    sm:border-r-1 md:border-r-1 lg:border-1 xl:border-1 sm:pr-4 md:pr-4 lg:px-4 xl:px-4">
                            <h3>Links</h3>
                            <ul>
                                <li class="my-4">
                                    <a class="text-gray-600 dark:text-gray-100 hover:underline"
                                       href="#color-palette">Color palette</a>
                                </li>
                                <li class="my-4">
                                    <a class="text-gray-600 dark:text-gray-100 hover:underline"
                                       href="#installation">Installation</a>
                                </li>
                                <li class="my-4">
                                    <a class="text-gray-600 dark:text-gray-100 hover:underline" href="#theme">Theme</a>
                                </li>
                                <li class="my-4">
                                    <a class="text-gray-600 dark:text-gray-100 hover:underline"
                                       href="#transforms">Transforms</a>
                                </li>
                                <li class="my-4">
                                    <a class="text-gray-600 dark:text-gray-100 hover:underline"
                                       href="#grid">Grid</a>
                                </li>
                                <li class="my-4">
                                    <a class="text-gray-600 dark:text-gray-100 hover:underline"
                                       href="#filters">Filters</a>
                                </li>
                                <li class="my-4">
                                    <a class="text-gray-600 dark:text-gray-100 hover:underline"
                                       href="#how-it-works">How it works</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12-xs col-6-sm col-6-md col-3-lg col-2-xl py-0">
                        <div class="border-0 border-solid border-gray-100 dark:border-gray-800 h-full py-8 px-0
                                    sm:border-l-1 md:border-l-1 lg:border-l-1 xl:border-1 sm:px-4 md:px-4 lg:px-4 xl:px-4">
                            <h3>Projects</h3>
                            <ul>
                                <li class="my-4">
                                    <a class="text-gray-600 dark:text-gray-100 hover:underline"
                                       href="#">Lorem</a>
                                </li>
                                <li class="my-4">
                                    <a class="text-gray-600 dark:text-gray-100 hover:underline"
                                       href="#">Lorem</a>
                                </li>
                                <li class="my-4">
                                    <a class="text-gray-600 dark:text-gray-100 hover:underline"
                                       href="#">Lorem</a>
                                </li>
                                <li class="my-4">
                                    <a class="text-gray-600 dark:text-gray-100 hover:underline"
                                       href="#">Lorem</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    </div>
</template>


<script setup lang="ts">
import AnimatedCursor from "../components/AnimatedCursor.vue";
</script>


<style lang="scss">
.wrapper {
    width: 100%;
    max-width: 1600px;
    margin: auto;
}

// Diagonal background styles
.bg-diagonal {
    background-image: repeating-linear-gradient(
            -45deg, /* Diagonal direction */
            rgba(193, 193, 193, 0.35) 0px, /* Line color and start */
            rgba(193, 193, 193, 0.35) 0.3px, /* Line thickness */
            transparent 1.5px, /* Background color starts */
            transparent 7px /* Distance between lines */
    );
    background-size: cover;
}

.bg-dotted {
    background-image: radial-gradient(rgba(193, 193, 193, 0.65) 0.9px, transparent 0.9px);
    background-size: 14px 14px;
}

body[data-theme="light"],
body {
    background-color: white !important;

    .container {
        background-color: white !important;
    }

    .bg-light-gray {
        background-color: #F2F3F3 !important;
    }
}

body[data-theme="dark"] {
    background-color: #030712 !important;

    .container {
        color: #F8F9FA !important;
    }

    .bg-light-gray {
        background-color: #1C202A !important;
    }

    .dark\:bg-custom-dark {
        background-color: #030712 !important;
    }
}


body {
    min-height: 100vh;
}
</style>

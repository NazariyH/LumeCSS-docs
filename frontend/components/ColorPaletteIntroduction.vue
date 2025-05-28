<template>
    <div class="border-2 border-solid border-gray-100 dark:border-gray-800 rounded-lg bg-light dark:bg-custom-dark h-full p-4">
        <div class="md:p-8 lg:p-8 xl:p-8 pb-6">
            <div class="flex items-start dark:text-light xs:flex-column sm:flex-column w-full">
                <img class="h-5 mr-8 o-80 dark:invert-100" src="/icons/color-palette-icon.svg" alt="">

                <div class="xs:mt-2 sm:mt-2">
                    <h2>Color Magic</h2>
                    <p class="mt-2 text-sm lh-lg text-gray-600 dark:text-gray-100">
                        <strong>Lume<span class="text-flame">CSS</span></strong> makes color styling easy
                        with simple classes, letting you apply vibrant, customizable hues effortlessly.
                    </p>
                </div>
            </div>
        </div>

        <!-- Color palette-->
        <div class="flex justify-center">
            <div class="bg-dotted rounded-sm pl-4 pt-4 attachment-fixed rounded-md text-gray-600 w-full color-palette
                        overflow-hidden dark:text-light bg-light-gray">
                <div class="overflow-hidden" ref="colorPalette">
                    <div class="flex items-center text-sm mt-2">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 mr-1"></div>
                        <div
                            class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 -translate-y-3 mr-1 relative flex items-center justify-center">
                            <div
                                class="-rotate-45 border-1 border-solid border-gray-200 border-x-0 border-t-0 pl-5 pr-10 pb-2">
                                red
                            </div>
                        </div>
                        <div
                            class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 -translate-y-3 mr-1 relative flex items-center justify-center">
                            <div
                                class="border-1 border-solid border-gray-200 border-x-0 border-t-0 -rotate-45 pl-5 pr-10 pb-2">
                                orange
                            </div>
                        </div>
                        <div
                            class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 -translate-y-3 mr-1 relative flex items-center justify-center">
                            <div
                                class="border-1 border-solid border-gray-200 border-x-0 border-t-0 -rotate-45 pl-5 pr-10 pb-2">
                                blue
                            </div>
                        </div>
                        <div
                            class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 -translate-y-3 mr-1 relative flex items-center justify-center">
                            <div
                                class="border-1 border-solid border-gray-200 border-x-0 border-t-0 -rotate-45 pl-5 pr-10 pb-2">
                                green
                            </div>
                        </div>
                        <div
                            class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 -translate-y-3 mr-1 relative flex items-center justify-center">
                            <div
                                class="border-1 border-solid border-gray-200 border-x-0 border-t-0 -rotate-45 pl-5 pr-10 pb-2">
                                yellow
                            </div>
                        </div>
                        <div
                            class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 -translate-y-3 mr-1 relative flex items-center justify-center">
                            <div
                                class="border-1 border-solid border-gray-200 border-x-0 border-t-0 -rotate-45 pl-5 pr-10 pb-2">
                                purple
                            </div>
                        </div>

                        <div
                            class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 -translate-y-3 mr-1 relative flex items-center justify-center">
                            <div
                                class="border-1 border-solid border-gray-200 border-x-0 border-t-0 -rotate-45 pl-5 pr-10 pb-2">
                                gray
                            </div>
                        </div>

                        <div
                            class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 -translate-y-3 mr-1 relative flex items-center justify-center">
                            <div
                                class="border-1 border-solid border-gray-200 border-x-0 border-t-0 -rotate-45 pl-5 pr-10 pb-2">
                                pink
                            </div>
                        </div>

                        <div
                            class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 -translate-y-3 mr-1 relative flex items-center justify-center">
                            <div
                                class="border-1 border-solid border-gray-200 border-x-0 border-t-0 -rotate-45 pl-5 pr-10 pb-2">
                                cyan
                            </div>
                        </div>

                        <div
                            class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 -translate-y-3 mr-1 relative flex items-center justify-center">
                            <div
                                class="border-1 border-solid border-gray-200 border-x-0 border-t-0 -rotate-45 pl-5 pr-10 pb-2">
                                teal
                            </div>
                        </div>

                        <div
                            class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 -translate-y-3 mr-1 relative flex items-center justify-center">
                            <div
                                class="border-1 border-solid border-gray-200 border-x-0 border-t-0 -rotate-45 pl-5 pr-10 pb-2">
                                mint
                            </div>
                        </div>

                        <div
                            class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 -translate-y-2 relative flex items-center justify-center">
                            <div
                                class="border-1 border-solid border-gray-200 border-x-0 border-t-0 -rotate-45 pl-5 pr-10 pb-2">
                                plum
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-solid
                                            border-gray-200 py-1">900
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-900 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="bottom"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-900 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="bottom"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-900 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="bottom"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-900 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="bottom"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-900 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="bottom"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-900 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="bottom"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-900 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="bottom"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-900 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="bottom"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-900 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="bottom"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-900 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="bottom"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-900 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="bottom"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-900 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="bottom"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">800
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">700
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">600
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-red-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-orange-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-blue-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-green-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-yellow-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-purple-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-gray-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-pink-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-cyan-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-teal-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-mint-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-plum-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">500
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">400
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">300
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">200
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">100
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Define a reference to the DOM element that contains the color blocks
const colorPalette = ref(null)

onMounted(() => {
    // Safely get all elements inside colorPalette with the tooltip attribute
    const colorBlocks = Array.from(
        colorPalette.value?.querySelectorAll('[data-tooltip="tooltip"]') || []
    )

    // This will store all dynamically generated CSS rules
    let tooltipStyles = ''

    // Loop over each block and prepare tooltip content
    colorBlocks.forEach((block) => {
        // Ensure each block has a unique ID (needed for CSS targeting)
        if (!block.id) {
            block.id = 'tooltip-block-' + Math.random().toString(36).slice(2, 11)
        }
        const blockId = block.id

        // Get the computed background color of the block
        const computedStyles = window.getComputedStyle(block)
        const bgColor = computedStyles.backgroundColor

        // Convert RGB color to HEX, fallback to "Invalid Color" if conversion fails
        let hexColor
        try {
            hexColor = rgbStringToHex(bgColor)
        } catch (e) {
            console.error(`Error converting color for block ${blockId}:`, e)
            hexColor = 'Invalid Color'
        }

        // Append a new CSS rule for the tooltip `::after` content
        tooltipStyles += `
            #${blockId}::after {
                content: "${hexColor}";
            }
        `
    })

    // Create a <style> element only if we have styles to apply
    if (tooltipStyles) {
        const style = document.createElement('style')
        style.textContent = tooltipStyles
        document.head.appendChild(style)
    }
})


function rgbStringToHex(rgbString) {
    /* Converts an RGB string (e.g., "rgb(153, 0, 0)") to a HEX string (e.g., "#990000") */

    // Match "rgb(r, g, b)" format using regex
    const match = rgbString.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i)

    // Throw an error if the format is invalid
    if (!match) {
        throw new Error("Invalid RGB format. Expected 'rgb(r, g, b)'.")
    }

    // Destructure the RGB values and convert to numbers
    const [_, r, g, b] = match.map(Number)

    // Validate each component is in the 0–255 range
    if ([r, g, b].some(n => n < 0 || n > 255)) {
        throw new Error("RGB values must be between 0 and 255.")
    }

    // Convert to HEX and return
    return "#" + [r, g, b]
        .map(n => n.toString(16).padStart(2, '0')) // Pads single-digit hex values with leading zero
        .join('')
}

</script>

<style lang="scss">
.color-palette {
    max-height: 440px;
}
</style>
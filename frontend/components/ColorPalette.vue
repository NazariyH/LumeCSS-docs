<template>
    <div class="border-1 border-solid border-gray-300 rounded-lg bg-light h-full p-4">
        <div class="p-8 pb-6">
            <div class="flex items-start">
                <img class="h-5 mr-8 o-80" src="/icons/color-palette-icon.svg" alt="">

                <div>
                    <h2>Color Magic</h2>
                    <p class="mt-2 text-sm lh-lg text-gray-600">
                        <strong>Lume<span class="text-flame">CSS</span></strong> makes color styling easy
                        with simple
                        classes, letting you apply vibrant, customizable hues effortlessly.
                    </p>
                </div>
            </div>
        </div>

        <!-- Color palette-->
        <div class="flex justify-center">
            <div class="bg-dotted border-1 border-solid border-gray-300 rounded-sm pl-4 pt-4 attachment-fixed
                                    rounded-md text-gray-600 w-full color-palette overflow-hidden">
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
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-800 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">700
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-700 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">600
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-red-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-orange-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-blue-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-green-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-yellow-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-purple-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-gray-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-pink-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-cyan-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-teal-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-mint-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 duration-200 bg-plum-600 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">500
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-500 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">400
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-400 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">300
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-300 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">200
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-200 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                    </div>
                    <div class="flex items-center mb-1">
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 flex items-center text-sm border-1 border-x-0 border-t-0
                                            border-solid border-gray-200 py-1">100
                        </div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-red-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-orange-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-blue-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-green-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-yellow-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-purple-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-gray-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-pink-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-cyan-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-teal-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-mint-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                        <div class="max-w-4 max-h-2.5 min-w-4 min-h-2.5 bg-plum-100 mr-1"
                             data-tooltip="tooltip" data-tooltip-placement="top"
                             data-tooltip-title="#800000"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Initialize colorPalette variable
const colorPalette = ref(null)

onMounted(() => {
    // Retrieve and array of the color objects
    const colorBlocks = Array.from(colorPalette.value.querySelectorAll('[data-tooltip="tooltip"]'))

    // Iterate over each item in the colorBlocks
    colorBlocks.forEach((block) => {
        // Get computed styles
        const computedStyles = window.getComputedStyle(block)

        // Update the tooltip title
        block.setAttribute('data-tooltip-title', rgbStringToHex(computedStyles.backgroundColor))

        console.log(rgbStringToHex(computedStyles.backgroundColor))
    })
})

function rgbStringToHex(rgbString) {
    // Use a regular expression to extract the numbers from the string
    // This matches strings like "rgb(153, 0, 0)"
    const match = rgbString.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);

    // If the string doesn't match the expected format, throw an error
    if (!match) {
        throw new Error("Invalid RGB format. Expected 'rgb(r, g, b)'.");
    }

    // Extract the red, green, and blue values as numbers
    const [_, r, g, b] = match.map(Number); // match[1], match[2], match[3] become r, g, b

    // Validate that each color component is within the 0–255 range
    if ([r, g, b].some(n => n < 0 || n > 255)) {
        throw new Error("RGB values must be between 0 and 255.");
    }

    // Convert each number to a 2-digit hexadecimal string and join them
    return "#" + [r, g, b]
        .map(n => n.toString(16).padStart(2, '0')) // e.g., 153 -> '99', 0 -> '00'
        .join('');
}



</script>

<style lang="scss">
.color-palette {
    max-height: 440px;
}
</style>
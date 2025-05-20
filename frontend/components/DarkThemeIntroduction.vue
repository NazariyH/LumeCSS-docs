<template>
    <div class="p-4 bg-light border-1 border-solid border-gray-300 rounded-lg mb-2 select-none">
        <div class="p-8 pb-6">
            <div class="flex items-start">
                <img class="h-5 mr-8 o-80" src="/icons/dark-theme-icon.svg" alt="">

                <div>
                    <h2>Light Design for Dark Interfaces</h2>
                    <p class="mt-2 text-sm lh-lg text-gray-600">
                        <strong>Lume<span class="text-flame">CSS</span></strong> is a sleek, modern CSS library built
                        for intuitive theming and effortless dark mode. Customize faster, code cleaner, and let your
                        interface shine-day or night.
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-dotted bg-gray-100 rounded-lg pt-8 xl:px-20 lg:px-20 md:px-16 sm:px-6 xs:px-2 flex
            justify-center">
            <div class="relative w-full h-30" ref="wrapper">
                <div class="absolute top-0 left-half -translate-x-half w-0.5 h-full bg-flame z-3 cursor-pointer"
                     ref="draggable" :style="{ left: startX + '%' + ' !important' }"
                     @mousedown="startDrag">

                    <div class="relative h-full">
                        <div class="absolute p-2 bg-flame rounded-full top-half -translate-y-half flex
                                    left-half -translate-x-half">

                            <div class="arrow-icon min-w-1 min-h-1" style="filter: invert(1)"></div>
                        </div>
                    </div>
                </div>

                <div class="absolute left-half phone-image -translate-x-half">
                    <div class="phone-image relative overflow-hidden flex justify-between" ref="phoneWrapper">
                        <div class="w-full h-full overflow-hidden" :style="{ width: imageWidth + '%' + '!important' }">
                            <div class="phone-image relative">
                                <img class="absolute top-0 left-0 w-full" src="/images/light-theme-img.svg" alt="">
                            </div>
                        </div>
                        <div class="w-full h-full overflow-hidden"
                             :style="{ width: 100 - imageWidth + '%' + '!important' }">
                            <div class="phone-image relative">
                                <img class="absolute top-0 right-0 w-full" src="/images/dark-theme-img.svg"
                                     :style="{ right: imageWidth + '%' + '!important' }" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const wrapper = ref(null) // Wrapper for the drag element
const draggable = ref(null) // Element with drag functionality
const isDragging = ref(false) // Is used to indicate whether the user is dragging the draggable element
const startX = ref(50)  // Initial mouse position when dragging starts
const phoneWrapper = ref(null) // Phone wrapper that contains theme images
const imageWidth = ref(50) // Initial theme image width

const startDrag = (e) => {
    /* The function is responsible for adding event listeners to the draggable
    * element when the user starts dragging */

    isDragging.value = true

    // Add event listeners for mousemove and mouseup
    document.addEventListener('mousemove', onDrag)
    document.addEventListener('mouseup', stopDrag)

    // Prevent text selection while dragging
    document.body.style.userSelect = 'none'
}

const onDrag = (e) => {
    // If dragging is not active, exit the function
    if (!isDragging.value) return

    // Get the bounding rectangle of the wrapper (the parent div)
    const wrapperRect = wrapper.value.getBoundingClientRect()

    // Get the bounding rectangle of the phoneWrapper (the parent div)
    const phoneWrapperRect = phoneWrapper.value.getBoundingClientRect()

    // Calculate the x position relative to the wrapper
    let x = (e.clientX - wrapperRect.left) * 100 / wrapperRect.width

    // Calculate the x position relative to the phoneWrapper
    let phoneImageWidth = (e.clientX - phoneWrapperRect.left) * 100 / phoneWrapperRect.width

    // Make sure the x position relative to the wrapper is between 0 and 100
    if (x < 0) {
        startX.value = 0 // Set startX to 0
    } else if (x > 100) {
        startX.value = 100 // Set startX to 100
    } else {
        startX.value = x // Set startX to calculated x position
    }

    // Make sure the phoneImageWidth is between 0 and 100
    if (phoneImageWidth < 0) {
        imageWidth.value = 0 // Set imageWidth to 0
    } else if (phoneImageWidth > 100) {
        imageWidth.value = 100 // Set imageWidth to 100
    } else {
        imageWidth.value = phoneImageWidth // Set imageWidth to calculated phoneImageWidth
    }
}


const stopDrag = () => {
    /* The function is responsible for removing even listeners from the draggable
    * element when the user stops dragging  */

    isDragging.value = false

    // Remove event listeners after dragging is finished
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', stopDrag)

    // Restore text selection after dragging is finished
    document.body.style.userSelect = ''
}

</script>

<style lang="scss">
.arrow-icon {
    background-image: url("/icons/double-arrow-icon.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.phone-image {
    min-width: 250px !important;
    max-width: 400px !important;
    width: 70vw !important;
    height: 100%;

    &, * {
        user-select: none;
        -webkit-user-select: none;
    }
}

</style>
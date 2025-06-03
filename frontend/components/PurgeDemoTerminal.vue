<template>
    <div class="bg-black w-full border-2 border-solid border-gray-100 dark:border-gray-800 rounded-sm overflow-hidden">
        <!-- Navigation buttons -->
        <div class="w-full items-center py-2 mb-1">
            <div class="pl-4 flex">
                <div class="w-0.75 h-0.75 mr-2 rounded-full bg-red-500 hover:bg-red-300 ease duration-200 cursor-pointer"></div>
                <div class="w-0.75 h-0.75 mr-2 rounded-full bg-orange-500 hover:bg-orange-300 ease duration-200 cursor-pointer"></div>
                <div class="w-0.75 h-0.75 mr-2 rounded-full bg-green-500 hover:bg-green-300 ease duration-200 cursor-pointer"></div>
            </div>
        </div>

        <div class="w-full row bg-black p-1 pt-0">
            <div class="col-12-xs col-12-sm col-12-md col-7-lg col-7-xl">
                <!-- Index.html -->
                <div class="rounded-sm">
                    <div class="terminal-header w-full p-1 rounded-t-sm border-1 border-t-0 border-x-0 border-solid
                                border-gray-800">
                        <button class="btn-xs btn-secondary hover:bg-secondary border-1 border-solid border-gray-800
                                       trans-30-bg">
                            index.html
                        </button>

                        <button class="ml-2 btn-xs trans-50-bg">package.json</button>
                        <button class="ml-2 btn-xs trans-50-bg">webpack.config.js</button>
                    </div>

                    <div class="rounded-b-sm p-4 bg-light">
                        <pre class="text-sm bg-transparent p-0 m-0 -translate-y-6"><code ref="codeBlockRef" class="language-html">{{ indexHtmlContent }}</code></pre>
                    </div>
                </div>

                <!-- Terminal -->
                <div class="rounded-sm mt-1">
                    <div class="rounded-sm">
                        <div class="terminal-header w-full p-1 rounded-t-sm border-1 border-t-0 border-x-0 border-solid
                                border-gray-800">
                            <button class="btn-xs btn-secondary hover:bg-secondary border-1 border-solid border-gray-800
                                           trans-30-bg">
                                Terminal
                            </button>
                        </div>

                        <div class="h-10 rounded-b-sm p-4 pb-0 bg-light relative overflow-y-hidden relative">
                            <div class="absolute bottom-0 min-h-full flex flex-column">
                                <span class="block text-sm text-light trans-50-text">
                                    ≈ lumecss <span class="text-purple-200 trans-50-text">v1.2.8</span>
                                </span>

                                <pre class="text-sm bg-transparent p-0 m-0"><code ref="consoleCodeBlockRef" class="language-sh">{{ compileConsoleContent }}</code></pre>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-sm"></div>
                </div>
            </div>

            <!-- Compiled lumecss.min.css file -->
            <div class="col-12-xs col-12-sm col-12-md col-5-lg col-5-xl rounded-sm xs:mb-1 sm:mb-1 md:mb-1">
                <div class="rounded-sm xs:mt-1 sm:mt-1 md:mt-1 lg:ml-1 xl:ml-1 min-h-20 h-full
                            overflow-hidden flex flex-column">
                    <div class="terminal-header w-full p-1 rounded-t-sm border-1 border-t-0 border-x-0 border-solid
                                border-gray-800">
                        <button class="btn-xs btn-secondary hover:bg-secondary border-1 border-solid border-gray-800
                                       trans-30-bg">lumecss.min.css
                        </button>
                    </div>

                    <div class="rounded-b-sm p-4 bg-light h-full relative overflow-y-hidden">
                        <pre ref="cssCodeBlockWrapperRef" class="text-sm bg-transparent p-0 m-0 overflow-scroll h-full
                             w-full absolute top-0 -translate-y-8"><code ref="cssCodeBlockRef"
                             class="language-css">{{ lumecssMinCssContent }}</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Prism from 'prismjs'

// -----------------------------
// 1. Define the data sources
// -----------------------------

// Classes that will be typed one-by-one into the <button>'s class attribute
const classes = ['btn', 'mx-4', 'my-2', 'uppercase', 'ls-xs', 'shadow-sm-dark']

// Classes to be inserted into lumecss.min.css (output shown in terminal)
const classesToInsert = [`
.btn {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    border: 0;
    text-decoration: none;
    font-size: 14px;
    padding: .75rem 1.5rem;
    border-radius: .35rem;
    transition: all 300ms ease-in-out;
    background: #212529;
    color: #f8f9fa;
    border: .1rem solid #212529;
}

.btn:hover {
    background-color: rgb(55.7432432432, 62.5, 69.2567567568);
    border: .1rem solid rgb(55.7432432432, 62.5, 69.2567567568);
} `, `
.mx-4 {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
} `, `
.my-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
} `, `
.uppercase {
    text-transform: uppercase;
} `, `
.ls-xs {
    letter-spacing: 0.1em !important;
} `, `
.shadow-sm-dark {
    -webkit-box-shadow: .2rem .2rem .4rem #212529;
    -moz-box-shadow: .2rem .2rem .4rem #212529;
    box-shadow: .2rem .2rem .4rem #212529;
} `]

// Terminal messages that simulate LumeCSS output logs
const terminalCommands = [
    '> LumeCSS build: 0.002s',
    '> LumeCSS build: 0.002s',
    '> LumeCSS build: 0.004s',
    '> LumeCSS build: 0.005s',
    '> LumeCSS build: 0.007s',
    '> LumeCSS build: 0.007s'
]

// HTML string that represents the contents of the index.html block
const indexHtmlContent = ref(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LumeCSS</title>
    <link rel="stylesheet" href="/build.css" />
  </head>
  <body>
    <button class=""></button>
  </body>
</html>`)

// Terminal output string that simulates build logs
const compileConsoleContent = ref(`
`)

// lumecss.min.css file content
const lumecssMinCssContent = ref(`
`)

// Refs to code blocks used for syntax highlighting via Prism
const codeBlockRef = ref(null)
const consoleCodeBlockRef = ref(null)
const cssCodeBlockRef = ref(null)
const cssCodeBlockWrapperRef = ref(null)


// -----------------------------
// 2. When component mounts, start typing simulation
// -----------------------------
onMounted(() => {
    simulateTyping()
})


// -----------------------------
// 3. Simulate typing each class into the <button>
// -----------------------------
async function simulateTyping() {
    let currentClass = ''         // accumulates classes
    let terminalIndex = 0         // tracks terminalCommands index

    for (let classIndex = 0; classIndex < classes.length; classIndex++) {
        const current = classes[classIndex]

        // Type character by character
        for (let charIndex = 0; charIndex < current.length; charIndex++) {
            currentClass += current[charIndex]
            await updateButtonClass(currentClass) // update button class live
            await new Promise(resolve => setTimeout(resolve, 120)) // typing delay
        }

        // Add space after finishing the class
        currentClass += ' '
        await updateButtonClass(currentClass) // update button class live

        // Wait a bit before printing the compile command
        await new Promise(resolve => setTimeout(resolve, 600))

        // --- Print the command line once per class ---
        compileConsoleContent.value += `$ npx lumecss lumecss:build --output ./public\n`

        // Wait a bit before printing terminal message
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Print the next terminal message in order
        if (terminalIndex < terminalCommands.length) {
            // Update the compileConsoleContent text content
            compileConsoleContent.value += `${terminalCommands[terminalIndex]}\n`
            terminalIndex++
        }

        // Highlight terminal block after update
        await nextTick()
        if (consoleCodeBlockRef.value) {
            Prism.highlightElement(consoleCodeBlockRef.value)
        }

        // Wait a bit before printing the class
        await new Promise(resolve => setTimeout(resolve, 200))

        // Insert the corresponding CSS rule into lumecss.min.css content
        if (classIndex < classesToInsert.length) {
            lumecssMinCssContent.value += `${classesToInsert[classIndex]}\n`

            // Highlight the CSS code block
            await nextTick()
            if (cssCodeBlockRef.value) {
                Prism.highlightElement(cssCodeBlockRef.value)
            }

            // Update the scroll position of cssCodeBlockWrapperRef
            if (cssCodeBlockWrapperRef.value) {
                cssCodeBlockWrapperRef.value.scrollTop = cssCodeBlockWrapperRef.value.scrollHeight
            }

        }

        // Pause before typing the next class
        await new Promise(resolve => setTimeout(resolve, 1500))
    }
}

// -----------------------------
// 4. Update the HTML and terminal when a new class is typed
// -----------------------------
async function updateButtonClass(classStr) {
    indexHtmlContent.value = indexHtmlContent.value.replace(
        /<button class="[^"]*"><\/button>/,
        `<button class="${classStr.trim()}"></button>`
    )

    // Highlight the code
    await nextTick()
    if (codeBlockRef.value) {
        Prism.highlightElement(codeBlockRef.value)
    }
}
</script>



<style lang="scss">
    .terminal-header {
        background-color: #22262E !important;

        & + div {
            background-color: #1C202A !important;
        }
    }
</style>
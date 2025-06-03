<template>
    <div class="bg-dotted bg-dark h-full overflow-hidden rounded-lg">
        <div class="p-4 bg-light dark:bg-custom-dark border-2 border-solid border-gray-100 rounded-lg dark:border-gray-800">
            <!-- Terminal -->
            <div class="bg-black dark:bg-light rounded-sm overflow-hidden">
                <div>
                    <!-- Navigation buttons -->
                    <div class="w-full row items-center py-2">
                        <div class="col-4 pl-4 flex">
                            <div class="w-0.75 h-0.75 mr-2 rounded-full bg-red-500 hover:bg-red-300
                                                ease duration-200 cursor-pointer"></div>
                            <div class="w-0.75 h-0.75 mr-2 rounded-full bg-orange-500 hover:bg-orange-300
                                                ease duration-200 cursor-pointer"></div>
                            <div class="w-0.75 h-0.75 mr-2 rounded-full bg-green-500 hover:bg-green-300
                                                ease duration-200 cursor-pointer"></div>
                        </div>

                        <div class="col-4 text-light dark:text-dark text-xs lowercase font-bold flex justify-center">
                            <span>How to trick a monkey</span>
                        </div>
                    </div>

                    <div class="bg-dark p-4">
                                    <pre class="text-sm bg-transparent py-0 my-0">
                                        <code class="language-javascript">
                                            {{ displayedCode }}
                                        </code>
                                    </pre>
                    </div>
                </div>
            </div>

            <p class="mt-4 text-sm lh-lg text-gray-600 dark:text-gray-100">
                Built with love (and too much coffee), <strong>Lume<span
                class="text-flame">CSS</span></strong> takes cues from <strong>Bootstrap</strong> and
                <strong>TailwindCSS</strong> - but with a spicy twist. No more dull stylesheets or margin
                struggles. With <strong>Lume<span class="text-flame">CSS</span></strong>, your dev life just
                got brighter. <strong>Let’s glow.</strong>
            </p>

            <!-- Troll button -->
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" v-if="showTrollButton"
               class="btn-xs btn-outline-dark mt-4 dark:btn-outline-light @slideInFadeUp">Do Not Click 🤫</a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

// Reference to the troll button
const showTrollButton = ref(false)

// A piece of code that would be injected into the animated terminmal
const code = `
const secretBlock = document.getElementsById('secretBlock');

const lumeMagic = () => {
  if (!window.initialized) {
    let stylePower = 0;
    while (stylePower < 50) { stylePower += 25; } // Build power

    const secretBtn = document.createElement("button");
    secretBtn.textContent = "Do Not Click 🤫"; // Button text

    // Add button to page
    secretBlock.append(secretBtn);
  }
};

lumeMagic();`

const displayedCode = ref('')

// Use Nuxt's injected Prism
const {$prism} = useNuxtApp()

// Function to simulate typing animation and apply syntax highlighting after each character
const typeCode = async () => {
    // Loop through each character in the original code string
    for (let i = 0; i < code.length; i++) {
        // Add one character at a time to the displayedCode (reactively bound to <code>)
        setTimeout(() => {
            displayedCode.value += code[i]
        }, 20)

        // Wait for a short delay to simulate typing effect (20ms per character)
        await new Promise(resolve => setTimeout(resolve, 20))

        // After each character is added, ensure syntax highlighting is applied
        nextTick(() => {
            // Highlight the code using Prism.js after each character is typed
            Prism.highlightAll();
        })
    }

    // Show troll button
    showTrollButton.value = true
}

// Run the typing animation after the component is mounted in the DOM
onMounted(() => {
    typeCode()
})
</script>

<style lang="scss">

</style>
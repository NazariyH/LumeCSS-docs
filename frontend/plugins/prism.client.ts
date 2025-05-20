// plugins/prism.client.ts
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

// Load language components
import 'prismjs/components/prism-javascript'
// Optional: more languages like typescript, bash, json etc.

export default defineNuxtPlugin(() => {
    return {
        provide: {
            prism: Prism
        }
    }
})

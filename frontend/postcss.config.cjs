const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
    plugins: [
        require('postcss-preset-env')(),
        purgecss({
            content: [
                './app.vue',               // Reference app.vue in Nuxt 3 setup
                './static/**/*.html',      // Static HTML files if they exist
                './nuxt.config.ts',        // Include Nuxt config if needed
                './pages/**/*.vue',        // Wildcard for future .vue files in pages
                './components/**/*.vue',   // Wildcard for future .vue files in components
                './layouts/**/*.vue',      // Wildcard for future .vue files in layouts
            ],
            safelist: [
                'safelist-class',
                'active',
                'collapsed',
                'show',
                'in-view',
                'removing',
                'show-password',
                'hide-password',
                '@slideInFadeRight',
                '@slideInFadeLeft',
                '@slideInFadeUp',
                '@slideInFadeDown',
                '@fade',
                '@bounce',
            ],
            whitelistPatterns: [/lumcecss/],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:\/.]+/g) || [],
            keyframes: false,
            fontFace: true,
        }),
    ],
};

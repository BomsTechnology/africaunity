import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
//import legacy from '@vitejs/plugin-legacy';
import vue from "@vitejs/plugin-vue";

const hash = Math.floor(Math.random() * 90000) + 10000;

export default defineConfig({
    plugins: [
        /* legacy({
            targets: ['chrome >= 64', 'edge >= 79', 'safari >= 11.1', 'firefox >= 67'],
            ignoreBrowserslistConfig: true,
            renderLegacyChunks: false,
            modernPolyfills: ['es/global-this'],
          }),*/
        laravel(["resources/js/app.js"]),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith('emoji-')
                },
            },
            
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
    build: {
        target: 'es2015',
        manifest: true,
        rollupOptions: {
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,
                // Ajoutez la version actuelle de l'application à la sortie
              //  banner: `// @vite <%= hash %>`,
            },
        },
        define: {
            global: {},
            // Définissez la valeur de `@vite` en tant que version actuelle de l'application
           // "@vite": JSON.stringify(Date.now()),
        } 
      /*  commonjsOptions: {
            esmExternals: true,
        },
        */
    },
});

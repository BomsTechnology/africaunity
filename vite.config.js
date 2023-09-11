import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

const hash = Math.floor(Math.random() * 90000) + 10000;

export default defineConfig({
    plugins: [
        laravel(["resources/js/app.js"]),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
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
        manifest: true,
        rollupOptions: {
            output: {
                entryFileNames: "[name].[hash].js",
                chunkFileNames: "[name].[hash].js",
                assetFileNames: "[name].[hash].[ext]",
                // Ajoutez la version actuelle de l'application à la sortie
                banner: `// @vite <%= hash %>`,
            },
        },
        define: {
            // Définissez la valeur de `@vite` en tant que version actuelle de l'application
            "@vite": JSON.stringify(Date.now()),
        },
        commonjsOptions: {
            esmExternals: true,
        },
    },
});

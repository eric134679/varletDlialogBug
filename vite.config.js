import {defineConfig} from 'vite'
import { fileURLToPath, URL } from "node:url"
import vue from '@vitejs/plugin-vue'
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver , VarletUIResolver} from 'unplugin-vue-components/resolvers'
export default defineConfig({
    base: '',
    server: {
        host: '0.0.0.0',
        port: 3000,
    },

    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver(), VarletUIResolver()],
            dts: 'src/auto-imports.d.ts',
            imports: ['vue','vue-router']
        }),
        Components({
            resolvers: [ElementPlusResolver(),  VarletUIResolver({ autoImport: true })],
        })],
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer
            ]
        }
    },
    optimizeDeps: {
        exclude: ["oh-vue-icons/icons"]
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'assets': fileURLToPath(new URL('./src/assets', import.meta.url))
        }
    }
})

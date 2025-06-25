import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@core': path.resolve(__dirname, './src/core'),
            '@context': path.resolve(__dirname, './src/context'),
            '@data': path.resolve(__dirname, './src/data'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            '@types': path.resolve(__dirname, './src/types'),
            '@tests': path.resolve(__dirname, './src/__tests__'),
        },
    },
})

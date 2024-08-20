import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import veauryVitePlugins from 'veaury/vite/index'

export default defineConfig({
    plugins: [
        // vue(),
        // vueJsx(),
        veauryVitePlugins({
            type: 'vue'
        })
    ],
    server: {
      port: 2002,
    },
    // 打包配置
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index.html'),
        },
      }
    }
})

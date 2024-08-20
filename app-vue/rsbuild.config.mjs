import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginVue()],
  server: {
    port: 3000,
  },
  dev: {
    // 必须要配置 assetPrefix，在生产环境需要配置 output.assetPrefix
    assetPrefix: true,
  },
  devServer: {
    hot: false,
  },
  tools: {
    rspack: {
      output: {
      // 需要设置一个唯一值，不能和其他应用相等
        uniqueName: 'app_vue'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'app_vue',
          exposes: {
            './button': './src/button.vue',
          },
          shared: [
            {
              vue: {
                requiredVersion: '^3.0.0',
                singleton: true,
              },
            }
          ],
        }),
      ],
    },
  },
});
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
  },
  dev: {
    // 必须要配置 assetPrefix，在生产环境需要配置 output.assetPrefix
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
      // 需要设置一个唯一值，不能和其他应用相等
        uniqueName: 'app_react'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'app_react',
          exposes: {
            './button': './src/button.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});
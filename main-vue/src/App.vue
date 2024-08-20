<template>
  <div class="content">
    <App/>
  </div>
</template>

<script setup>
import { init, loadRemote } from '@module-federation/enhanced/runtime';
import App from './app';
init({
    name: 'main_vue',
    remotes: [
        {
            name: "app_vue",
            // mf-manifest.json 是在 Module federation 新版构建工具中生成的文件类型，对比 remoteEntry 提供了更丰富的功能
            // 预加载功能依赖于使用 mf-manifest.json 文件类型
            entry: "http://localhost:3001/mf-manifest.json",
            alias: "appVue"
        },
        {
            name: "app_react",
            // mf-manifest.json 是在 Module federation 新版构建工具中生成的文件类型，对比 remoteEntry 提供了更丰富的功能
            // 预加载功能依赖于使用 mf-manifest.json 文件类型
            entry: "http://localhost:3000/mf-manifest.json",
            alias: "appReact"
        },
    ],
});
</script>

<style>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}
.content > div {
  width: 200px;
  margin: auto;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>

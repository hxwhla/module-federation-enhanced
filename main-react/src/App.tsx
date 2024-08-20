import './App.css';
// federation_provider 提供的远程组件
// import ReactButton from 'federation_provider/button';
import { init, loadRemote } from '@module-federation/enhanced/runtime';
import React, { lazy, Suspense } from 'react';

init({
    name: 'main_react',
    remotes: [
      {
          name: "app_react",
          // mf-manifest.json 是在 Module federation 新版构建工具中生成的文件类型，对比 remoteEntry 提供了更丰富的功能
          // 预加载功能依赖于使用 mf-manifest.json 文件类型
          entry: "http://localhost:3000/mf-manifest.json",
          alias: "appReact"
      },
      {
          name: "app_vue",
          // mf-manifest.json 是在 Module federation 新版构建工具中生成的文件类型，对比 remoteEntry 提供了更丰富的功能
          // 预加载功能依赖于使用 mf-manifest.json 文件类型
          entry: "http://localhost:3001/mf-manifest.json",
          alias: "appVue"
      },
    ],
});
// 使用别名加载

const ReactButton = lazy(() => loadRemote<{add: (...args: Array<number>)=> number }>("appReact/button"));
const VueButton = lazy(() => loadRemote<{add: (...args: Array<number>)=> number }>("appVue/button"));

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ReactButton />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
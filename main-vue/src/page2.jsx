import { defineComponent, h, ref, defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";
import { loadRemote } from '@module-federation/enhanced/runtime';
import React, { lazy } from 'react';
import { applyReactInVue, applyPureReactInVue } from 'veaury'

// 使用别名加载
const VueButton = defineAsyncComponent(() => loadRemote("appVue/button"));
const ReactButton = applyReactInVue(lazy(() => loadRemote("appReact/button")));
console.log('ReactButton', ReactButton)
export default defineComponent({
  name: "app",
  setup() {
    const router = useRouter();
    const handleClick = () => {
      router.push({
        path: "page1",
      });
    }
    return {
      handleClick
    };
  },
  render() {
    const { handleClick } = this;

    return (<div>
      <button onclick={handleClick}>jump to page1</button>
      <VueButton />
      <ReactButton />
    </div>
    );
  },
});

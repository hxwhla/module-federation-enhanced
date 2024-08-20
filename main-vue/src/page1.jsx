import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "app",
  props: {},
  setup() {
    const router = useRouter();
    setTimeout(() => {
      router.push({
        path: "page2",
      });
    }, 1000);
    return {};
  },
  render() {
    return (<div class="">
      <h1>Rsbuild with Vue</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>);
  },
});

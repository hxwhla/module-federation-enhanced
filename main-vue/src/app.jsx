import { defineComponent, KeepAlive } from "vue";
export default defineComponent({
    name: "app",
    props: {},
    setup() {
        return {
        };
    },
    render() {
        return (<router-view v-slots={{
            default: (scope) => <KeepAlive>{scope.Component}</KeepAlive>,
        }}
        ></router-view>);
    },
});

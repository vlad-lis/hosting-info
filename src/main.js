// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import store from "./store";
import vuetify from "./plugins/vuetify";

const app = createApp(App);

registerPlugins(app);

app.use(store).use(vuetify);

app.mount("#app");

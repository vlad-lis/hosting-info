/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import store from "./store"; // Import your Vuex store
import vuetify from "./plugins/vuetify"; // Import Vuetify instance

const app = createApp(App);

registerPlugins(app);

// Use Vuex store and Vuetify
app.use(store).use(vuetify);

app.mount("#app");

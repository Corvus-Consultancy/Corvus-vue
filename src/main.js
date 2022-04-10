import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Vue3Plausible } from "vue-plausible";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone);
library.add(faAngleLeft);
library.add(faAngleRight);

createApp(App)
  .use(Vue3Plausible, {
    domain: "corvus-consultancy-b3e31.web.app",
    apiHost: "https://plausible.hedium.nl",
  })
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

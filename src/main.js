import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyAuGjc-ciG6HK8qEgJRre9IGc9pZqipnUM",
  authDomain: "gallalie-staging.firebaseapp.com",
  databaseURL: "https://gallalie-staging.firebaseio.com",
  projectId: "gallalie-staging",
  storageBucket: "gallalie-staging.appspot.com",
  messagingSenderId: "152453665449",
  appId: "1:152453665449:web:98a15a96393e0b575a4fb8"
};

firebase.initializeApp(config);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

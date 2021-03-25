// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import { SwipeList, SwipeOut } from 'vue-swipe-actions'

// import 'vue-swipe-actions/dist/vue-swipe-actions.css';

import DefaultLayout from '~/layouts/Default.vue'

// import '~/assets/styles.css'

import { SwipeableBottomSheet } from "vue-swipeable-bottom-sheet"

export default function (Vue, { router, head, isClient, appOptions }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  const opts = {} //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);

  Vue.component('SwipeList', SwipeList);
  Vue.component('SwipeOut', SwipeOut);

  Vue.component('Drawer', SwipeableBottomSheet);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

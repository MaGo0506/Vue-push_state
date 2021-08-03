/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import { store } from './store/store';
import Routes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	routes: Routes,
	mode: 'history',
});

Vue.directive('rainbow', {
	bind(el, binding, vnode) {
		el.style.background = `#${Math.random().toString().slice(2, 8)}`;
	},
});

new Vue({
	store,
	el: '#app',
	render: (h) => h(App),
	router,
});

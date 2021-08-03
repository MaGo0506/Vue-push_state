/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
	state: {
		profiles: [],
		posts: [],
	},
	actions: {
		getProfiles({ commit }) {
			axios
				.get('https://jsonplaceholder.typicode.com/users')
				.then((response) => {
					commit('SET_PROFILES', response.data);
				});
		},
		getPosts({ commit }, id) {
			axios
				.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
				.then((response) => {
					commit('SET_POSTS', response.data);
				});
		},
	},
	mutations: {
		SET_PROFILES(state, profiles) {
			state.profiles = profiles;
		},
		SET_POSTS(state, posts) {
			state.posts = posts;
		},
		resetState(state) {
			state.posts = [];
		},
	},
});

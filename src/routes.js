import userProfile from './components/user-profile.vue';

export default [
	{ path: '/', component: userProfile },
	{ path: '/:id', component: userProfile },
];

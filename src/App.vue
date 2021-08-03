<template>
  <div id="app">
    <loader />
    <user-profile />
  </div>
</template>

<script>
import userProfile from './components/user-profile.vue';
import loader from './components/loader.vue';

export default {
	name: 'App',
	components: {
		'user-profile': userProfile,
		loader,
	},
	data() {
		return {

		};
	},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  display: inline-flex;
  justify-content: center;
  background: #d9e5f9;

}

</style>

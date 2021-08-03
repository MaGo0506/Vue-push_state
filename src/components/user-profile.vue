<template>
  <div>
    <h1 class="title">
      Profiles
    </h1>
    <div id="show-profiles">
      <div
        v-for="profile in profiles"
        :key="profile.id"
        :data-id="profile.id"
        :class="`single-profile ${active == profile.id ? 'active' : ''}`"
      >
        <img
          class="profileImg js-profile-img  rounded-circle"
          src="../user.jpg"
          alt="Card image cap"
        >
        <p>
          {{ profile.id }}. {{ profile.name }}
        </p>
        <p>{{ profile.email }}</p>
        <router-link :to="`/${profile.id}`">
          <button @click="isActive(profile); showToggle()">
            Show Posts
          </button>
        </router-link>
      </div>
    </div>
    <router-link
      :to="`/`"
      class="resetHolder"
    >
      <button
        class="resetBtn"
        @click="resetBtn"
      >
        Reset All
      </button>
    </router-link>
    <div id="show-posts">
      <div
        v-if="hide"
        id="loader"
      >
        <img
          src="../loader.gif"
          alt="Loading..."
        >
      </div>
      <div
        v-for="post in posts"
        :id="post.id"
        :key="post.id"
        :class="`postCard`"
      >
        <h3>{{ post.userId }}. {{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
	data() {
		return {
			active: 0,
			hide: false,
			id: this.$route.params.id,
		};
	},
	computed: {
		profiles() {
			return this.$store.state.profiles;
		},
		posts() {
			return this.$store.state.posts;
		},
	},
	mounted() {
		this.$store.dispatch('getProfiles');
	},
	methods: {
		isActive(post) {
			this.active = post.id;
			this.$store.dispatch('getPosts', post.id);
		},
		showToggle() {
			this.hide = true;
			setTimeout(() => {
				this.hide = false;
			}, 2000);
		},
		resetBtn() {
			this.active = 0;
			this.$store.commit('resetState');
		},
	},
};
</script>

<style lang='scss' scoped>

.title{
        text-align: center;
    }

#show-profiles {
    margin: 0 auto;
    text-align: center;

    .single-profile {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin: 10px;
        background: snow;
        color: #000;
        width: 20%;
        height: 350px;
        text-align: center;
        overflow: hidden;

        img {
          height: auto;
          width: 200px;
          border-radius: 50%;
        }

        p {
          padding: 10px 0;
        }

        button {
          padding: 10px;
          background: cornflowerblue;
          color: #fff;
          border: none;
          font-size: 16px;
          margin-top: 5px;
          cursor: pointer;
        }

        &.active {
            background: cornflowerblue;
        }
    }
}

.resetHolder {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  text-decoration: none;

  .resetBtn {
    padding: 10px;
    width: 400px;
    background: cornflowerblue;
    color: snow;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
}

#show-posts {
  position: relative;
  text-align: center;

  .postCard {
      display: inline-flex;
      flex-direction: column;
      padding: 20px;
      margin: 10px;
      background: cornflowerblue;
      color: #fff;
      width: 20%;
      height: 250px;
      text-align: left;

      h3 {
        text-align: center;
        margin-bottom: 20px;
      }
}

  #loader {
        position: absolute;
        z-index: 99;
        top: 0;
        width: 100%;
        height: 100%;
        background: #d9e5f9;
        animation: fadeOut 3s;
        animation-fill-mode: forwards;

        @keyframes fadeOut {
            100% {
            opacity: 0;
            visibility: hidden;
            }
        }
    }
}

</style>

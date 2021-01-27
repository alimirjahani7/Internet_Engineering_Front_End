<template>
  <div id='app'>
<!--    <div id='nav'>-->
<!--      <router-link to='/'>Home </router-link>-->
<!--      <router-link to='/login'>login </router-link>-->
<!--      <router-link to='/profile'>profile </router-link>-->
<!--    </div>-->
    <router-view />
  </div>
</template>

<script>

// import axios from "axios";

export default {
  name: 'app',
  async created() {
    // const response = await axios.get('user');
    // console.log(response);
    const response = {
      data: {
        token: "token",
        user: {
          username: "username"
        }
      }
    }
    this.$store.dispatch('setMe', response.data.user)
  },
}
</script>

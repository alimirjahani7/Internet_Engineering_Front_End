<template>
  <div id='app'>
<!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css" />-->
    <router-view />
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'app',
  async created() {
    const response = await axios.get('user/');
    // console.log(response);
    // const response = {
    //   data: {
    //     token: "token",
    //     user: {
    //       username: "username"
    //     }
    //   }
    // }
    this.$store.dispatch('setMe', response.data)
  },
}
</script>

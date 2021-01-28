<template>
  <div id="home" class="flex container h-screen w-full">
    <SideNav :tabs="getTabs"></SideNav>
    <div class="w-full md:w-1/2 h-full">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Notifications</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="flex flex-col-reverse">
      </div>
      <Notification v-for="(notif,index) in notifs" :key="index" :notif="notif"></Notification>
    </div>
    <Trending :trending="getTrends"></Trending>
  </div>
</template>

<script>
import Notification from "@/components/Notification";
import {mapGetters} from "vuex";
import Trending from "@/components/Trending";
import SideNav from "@/components/SideNav";

export default {
  components: {
    Notification,
    Trending,
    SideNav
  },
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      notifs: [
        {
          'profile_image': 'https://pbs.twimg.com/profile_images/1273242022892244997/5RfTzI9z_400x400.jpg',
          'user': 'mamad',
          'action': 'like',
          'tweet': 'my tweet'
        },
        {
          'profile_image': 'https://pbs.twimg.com/profile_images/1273242022892244997/5RfTzI9z_400x400.jpg',
          'user': 'mamad',
          'action': 'follow',
        },
        {
          'profile_image': 'https://pbs.twimg.com/profile_images/1273242022892244997/5RfTzI9z_400x400.jpg',
          'user': 'mamad',
          'action': 'retweet',
          'tweet': 'my tweet'
        },
      ]
    }
  },
  name: "Notifications",
  computed: {
    ...mapGetters([
      "getTrends", "getTabs"])
  },
}
</script>

<style scoped>

</style>
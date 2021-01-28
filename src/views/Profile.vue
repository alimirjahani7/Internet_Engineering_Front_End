<template>
  <div id="home" class="flex container h-screen w-full ">
    <SideNav :tabs="getTabs"></SideNav>
    <div class="w-full md:w-1/2 h-full overflow-y-scroll ">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold"> Profile </h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="w-full p-4  hover:bg-lighter flex">
        <div class="flex-none">
          <img :src="getUser.profile_image" class="flex-none w-12 h-12 rounded-full border border-lighter"/>
        </div>
        <div class="w-full p-2  flex">
          {{ getUser.first_name }}
        </div>
        <div v-if="!!getUser.followers" class="w-full p-2  flex">
          followers {{ getUser.followers.length }}
        </div>
        <div v-if="!!getUser.following" class="w-full p-2  flex">
          following {{ getUser.following.length }}
        </div>
      </div>
      <div class="flex flex-col-reverse border-b">
      </div>
      <show-tweets :tweets="getUser.tweets"/>
    </div>
    <Trending :trending="getTrends"></Trending>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import ShowTweets from "@/components/ShowTweets";
import Trending from "@/components/Trending";
import SideNav from "@/components/SideNav";

export default {
  name: 'UserPage',
  components: {SideNav, Trending, ShowTweets},
  computed: {
    getUser() {
      return this.$store.state.me
    },
    ...mapGetters([
      "getTrends", "getTabs"]),
    ...mapActions([
      "setMe"
    ]),
  },
  data() {
    return {
      id: 'userPage',
    }
  },
  props: ['username', 'title'],
  mounted() {
    this.setMe
  }
}
</script>
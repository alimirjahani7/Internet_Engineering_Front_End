<template>
  <div id="home" class="flex container h-screen w-full">
    <SideNav :tabs="getTabs"></SideNav>
    <div class="w-full md:w-1/2 h-full overflow-y-scroll">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Profile</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="w-full p-4  hover:bg-lighter flex">
        <div class="flex-none">
          <img :src="getUser(username).profile_image" class="flex-none w-12 h-12 rounded-full border border-lighter"/>
        </div>
        <div class="w-full p-2  flex">
          {{ getUser(username).name }}
        </div>
      </div>
      <div class="w-full p-2 flex">
        {{ getUser(username).username }}
      </div>
      <div class="flex flex-col-reverse">
      </div>
      <show-tweets :tweets="getUser(username).tweets"/>
    </div>
    <Trending :trending="getTrends"></Trending>
  </div>
</template>

<script>
import SideNav from "../components/SideNav";
import Trending from "../components/Trending";

import {mapGetters} from "vuex";
import ShowTweets from "@/components/ShowTweets";
// import axios from 'axios';

export default {
  name: 'User',
  props: ['username'],
  components: {
    ShowTweets,
    Trending,
    SideNav,
  },
  data() {
    return {
      s: this.$route.params.id,
      id: 'user',
    }
  },
  computed: {
    ...mapGetters([
      "getTrends",
      "getTabs",
      "getUser"])
  },
}
</script>
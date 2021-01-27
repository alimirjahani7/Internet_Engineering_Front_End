<template>
  <div id="home" class="flex container h-screen w-full">
    <SideNav :tabs="getTabs"></SideNav>
    <div class="w-full md:w-1/2 h-full overflow-y-scroll">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Home</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <NewTweet></NewTweet>
      <div class="flex flex-col-reverse">
      </div>
      <show-tweets :tweets="getTweets"/>
    </div>
    <Trending :trending="getTrends"></Trending>
  </div>
</template>

<script>
import SideNav from "../components/SideNav";
import NewTweet from "../components/NewTweet";
import Trending from "../components/Trending";

import {mapGetters} from "vuex";
import ShowTweets from "@/components/ShowTweets";

export default {
  name: 'home',
  components: {
    ShowTweets,
    Trending,
    NewTweet,
    SideNav,
  },
  data() {
    return {
      id: 'home',
      tweet: {content: ''}
    }
  },
  computed: {
    ...mapGetters([
      'getTweets', "getTrends", "getTabs", "getMe"])
  },
  methods: {
    addNewTweet() {
      let newTweet = {
        content: this.tweet.content
      };
      this.tweets.push(newTweet)
    }
  }
}
</script>
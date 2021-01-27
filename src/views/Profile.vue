<template>
  <div id="home" class="flex container h-screen w-full">
    <SideNav :tabs="tabs"></SideNav>
    <div class="w-full md:w-1/2 h-full overflow-y-scroll">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Profile</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="w-full p-4  hover:bg-lighter flex">
        <div class="flex-none">
          <img src="profile.png" class="flex-none w-12 h-12 rounded-full border border-lighter"/>
        </div>
        <div class="w-full p-2  flex">
          {{ getMe.name }}
        </div>
      </div>
      <div class="w-full p-2 flex">
        {{ getMe.handle }}
      </div>
      <div class="flex flex-col-reverse">
      </div>
      <show-tweets :tweets="getMyTweets"/>
    </div>
    <Trending :trending="getTrends" ></Trending>
  </div>
</template>

<script>
import SideNav from "../components/SideNav";
import Trending from "../components/Trending";

import {mapGetters} from "vuex";
import ShowTweets from "@/components/ShowTweets";

export default {
  name: 'profile',
  components: {
    ShowTweets,
    Trending,
    SideNav,
  },
  data() {
    return {
      tabs: [
        {icon: 'fas fa-home', title: 'Home', id: 'home'},
        {icon: 'fas fa-hashtag', title: 'Explore', id: 'explore'},
        {icon: 'far fa-bell', title: 'Notifications', id: 'notifications'},
        {icon: 'far fa-envelope', title: 'Messages', id: 'messages'},
        {icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks'},
        {icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists'},
        {icon: 'far fa-user', title: 'Profile', id: 'profile'},
        {icon: 'fas fa-ellipsis-h', title: 'More', id: 'more'}
      ],
      id: 'home',
      dropdown: false,
      tweet: {content: ''}
    }
  },
  computed: {
    ...mapGetters([
      'getMyTweets',
      "getMe",
      "getTrends"])
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
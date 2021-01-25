<template>
  <div id="home" class="flex container h-screen w-full">
    <SideNav :tabs="tabs"></SideNav>
    <!-- tweets -->
    <div class="w-full md:w-1/2 h-full overflow-y-scroll">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Home</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <NewTweet></NewTweet>
      <div class="flex flex-col-reverse">
        <!--        <div v-for="(tweet,index) in getTweets" :key="index">-->
        <!--          <ShowTweet :tweet="tweet"></ShowTweet>-->
        <!--        </div>-->
      </div>
      <div v-for="(follow,index) in getTweets" :key="index" class="w-full p-4 border-b hover:bg-lighter flex">
        <ShowTweet :tweet="follow"></ShowTweet>
      </div>
    </div>
    <Trending :trending="trending" :friends="friends"></Trending>
  </div>
</template>

<script>
import SideNav from "../components/SideNav";
import NewTweet from "../components/NewTweet";
import Trending from "../components/Trending";
import ShowTweet from "../components/ShowTweet";
import {mapGetters} from "vuex";

export default {
  name: 'home',
  components: {
    Trending,
    NewTweet,
    SideNav,
    ShowTweet
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
      trending: [
        {top: 'Trending in TX', title: 'Gigi', bottom: 'Trending with: Rip Gigi'},
        {top: 'Music', title: 'We Won', bottom: '135K Tweets'},
        {top: 'Pop', title: 'Blue Ivy', bottom: '40k tweets'},
        {top: 'Trending in US', title: 'Denim Day', bottom: '40k tweets'},
        {top: 'Trending', title: 'When Beyonce', bottom: '25.4k tweets'},
      ],
      friends: [
        {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy'},
        {src: 'monk.jpg', name: 'Adrian Monk', handle: '@detective:)'},
        {src: 'kevin.jpg', name: 'Kevin Hart', handle: '@miniRock'}
      ],
      tweet: {content: ''}
    }
  },
  computed: {
    ...mapGetters([
      'getTweets'])
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
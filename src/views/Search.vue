<template>
  <div id="home" class="flex container h-screen w-full ">

    <SideNav :tabs="getTabs"></SideNav>

    <div class="w-full md:w-1/2 h-full overflow-y-scroll">

      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Home</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="md:block hidden w-full h-1/12 border-l border-lighter py-2 px-6 relative">
        <input v-model="searchText" class="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4"
               placeholder="Search Twitter"/>
        <i @click="follow"
           class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"></i>
      </div>
      <show-tweets :tweets="tweets"/>
    </div>
    <Trending :trending="getTrends"></Trending>
  </div>
</template>

<script>
import ShowTweets from "@/components/ShowTweets";
import Trending from "@/components/Trending";
import SideNav from "@/components/SideNav";
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "Search",
  components: {
    ShowTweets,
    Trending,
    SideNav,
  },
  // props: ['base_url'],
  data() {
    return {
      id: 'userPage',
      searchText: '',
      tweets: [],
    }
  },
  computed: {
    getUser() {
      return this.$store.state.me
    },
    ...mapGetters([
      "getTrends", "getTabs", "getMe"]),
    ...mapActions([
      "setMe",
    ]),
  },
  methods: {
    follow() {
      this.followed = !this.followed
      if (this.searchText[0] === '#') {
        let ans = this.searchText
        ans = ans.substring(1)
        console.log(ans)
        axios.get('hashtagtweets/?key=' + ans).then((result) => {
          let tew = []
          for (const element of result.data) {
            for (const el of element.tweets)
              tew.push(el)
          }
          console.log(tew)
          this.tweets = tew
        })
      } else {
        axios.get('explore?search=' + this.searchText).then((result) => {
          this.tweets = result.data
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
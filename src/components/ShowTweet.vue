<template>
  <div>
    <!--    <span v-if="!!tweet.retweet_username"> {{ tweet.retweet_username }}  retweeted</span>-->
    <div class="w-full p-2  hover:bg-lighter flex ">
      <div class="flex-none mr-2">
        <img :src="`${tweet.profile_image}`" class="h-12 w-12 rounded-full flex-none"/>
      </div>
      <div class="w-full">
        <router-link :to="'/user/'+tweet_user.id">
          <div class="flex items-center w-full">
            <p class="font-semibold"> {{ tweet_user.first_name }}  {{ tweet_user.last_name }}</p>
            <p class="text-sm text-dark ml-2"> @{{ tweet_user.username }} </p>
            <p class="text-sm text-dark ml-2"> {{ tweet.date.slice(0, 10) }} </p>
            <i v-if="$store.state.me.id===tweet.user_id" class="fas  text-dark ml-auto">Delete</i>
          </div>

        </router-link>
        <p class="py-2">
          {{ tweet.text }}
          {{ getMe.id }}
        </p>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-retweet mr-3"></i>
            0
            <!--            <p> {{ tweet.retweets }} </p>-->
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-heart mr-3"></i>
            <p v-if="!!tweet.likes"> {{ tweet.likes.length }} </p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-share-square mr-3"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import axios from "axios";

export default {
  name: "ShowTweet",
  props: ["tweet"],
  computed: {
    ...mapGetters([
      "getMe"]),
    ...mapActions([
      "setMe"
    ]),
    getMeUser() {
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
      tweet_user: {}
    };
  },
  mounted() {
    // this.setMe
    if (this.tweet.user_id !== undefined) {
      let url = "user/?id=" + this.tweet.user_id + ""
      console.log(url);
      axios.get(url)
          .then(response => {
            this.tweet_user = response.data
          })
    }
  },

}
</script>


<template>
  <div >
    <span v-if="!!tweet.retweet_username"> {{ tweet.retweet_username }}  retweeted</span>
    <div class="w-full p-2  hover:bg-lighter flex ">
      <div class="flex-none mr-2">
        <img :src="`${tweet.profile_image}`" class="h-12 w-12 rounded-full flex-none"/>
      </div>
      <div class="w-full">
        <router-link :to="'/user/'+tweet.username">
          <div class="flex items-center w-full">
            <p class="font-semibold"> {{ tweet.name }} </p>
            <p class="text-sm text-dark ml-2"> @{{ tweet.username }} </p>
            <p class="text-sm text-dark ml-2"> {{ tweet.time }} </p>
            <i v-if="getMe.username===tweet.username" class="fas  text-dark ml-auto">Delete</i>
          </div>

        </router-link>
        <p class="py-2">
          {{ tweet.text }}
        </p>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center text-sm text-dark">
            <i class="far fa-comment mr-3"></i>
            <p> {{ tweet.comments }} </p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-retweet mr-3"></i>
            <p> {{ tweet.retweets }} </p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-heart mr-3"></i>
            <p> {{ tweet.like }} </p>
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
import {mapGetters} from "vuex";

export default {
  name: "ShowTweet",
  props: ["tweet"],
  computed: {
    ...mapGetters([
      "getMe"])
  },
}
</script>

<style scoped>

</style>
<template>
  <div class="px-5 py-3 border-b-8 border-lighter flex">
    <div class="flex-none">
      <img src="profile.png" class="flex-none w-12 h-12 rounded-full border border-lighter"/>
    </div>
    <form v-on:submit.prevent="addNewTweet" class="w-full px-4 relative">
      <textarea v-model="tweet.content" placeholder="What's up?" class="mt-3 pb-3 w-full focus:outline-none"/>
      <div class="flex items-center">
        <i class="text-lg text-blue mr-4 far fa-image"></i>
        <i class="text-lg text-blue mr-4 fas fa-film"></i>
        <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
        <i class="text-lg text-blue mr-4 far fa-smile"></i>
      </div>
      <button type="submit"
              class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
        Tweet
      </button>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "NewTweet",
  data() {
    return {
      tweet: {'content': ''},
      tweets: []
    }
  },
  methods: {
    ...mapActions([
      'addTweet'
    ]),
    addNewTweet() {
      let newTweet = {
        profile_image: 'elon.jpg',
        name: 'Elon Musk',
        handle: '@me',
        time: 'now',
        comments: '0',
        retweets: '0',
        like: '0',
        content: this.tweet.content
      };
      this.addTweet(newTweet)
    }
  }
}
</script>

<style scoped>

</style>
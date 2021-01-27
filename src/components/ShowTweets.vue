<template>
  <div>
    <div v-for="(tweet,index) in tweets" :key="index" class=" border-b w-full p-4 hover:bg-lighter flex">
      <show-tweet :tweet="tweet"></show-tweet>
    </div>
  </div>
</template>

<script>
import ShowTweet from "@/components/ShowTweet";

export default {
  name: "ShowTweets",
  components: {ShowTweet},
  props: ["tweets"],
  comments: {
    ShowTweet
  }
}
</script>

<style scoped>

</style>
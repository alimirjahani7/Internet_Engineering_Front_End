<template>
  <div class="w-full p-4 border-b hover:bg-lighter flex">
    <div class="flex-none mr-4">
      <img :src="`${tweet.profile_image}`" class="h-12 w-12 rounded-full flex-none"/>
    </div>
    <div class="w-full">
      <div class="flex items-center w-full">
        <p class="font-semibold"> {{ tweet.name }} </p>
        <p class="text-sm text-dark ml-2"> {{ tweet.handle }} </p>
        <p class="text-sm text-dark ml-2"> {{ tweet.time }} </p>
        <i class="fas fa-angle-down text-dark ml-auto"></i>
      </div>
      <p class="py-2">
        {{ tweet.content }}
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
</template>

<script>
export default {
  name: "ShowTweet",
  props: ["tweet"]
}
</script>

<style scoped>

</style>
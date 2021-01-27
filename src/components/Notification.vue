<template>
  <div>
    <div v-if="notif.action==='like'" class="w-full p-2  hover:bg-lighter flex ">
      <div class="flex-none mr-2">
        <img :src="`${notif.profile_image}`" class="h-12 w-12 rounded-full flex-none"/>
      </div>
      <div>
        <div>{{ notif.user }} liked your tweet</div>
        <p class="font-semibold"> {{ notif.tweet }} </p>
      </div>
    </div>
    <div v-if="notif.action==='retweet'" class="w-full p-2  hover:bg-lighter flex ">
      <div class="flex-none mr-2">
        <img :src="`${notif.profile_image}`" class="h-12 w-12 rounded-full flex-none"/>
      </div>
      <div>
        <div>{{ notif.user }} retweeted your Tweet</div>
        <p class="font-semibold"> {{ notif.tweet }} </p>
      </div>
    </div>
    <div v-if="notif.action==='follow'" class="w-full p-2  hover:bg-lighter flex ">
      <div class="flex mr-2 ">
        <img :src="`${notif.profile_image}`" class="h-12 w-12 rounded-full flex-none"/>
      </div>
      <div class="flex-none mr-2 p-1">
        <div>{{ notif.user }} followed you </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: ['notif']
}
</script>

<style scoped>

</style>
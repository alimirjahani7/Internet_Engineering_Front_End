<template>
  <div id="home" class="flex container h-screen w-full ">
    <SideNav :tabs="getTabs"></SideNav>
    <div class="w-full md:w-1/2 h-full overflow-y-scroll ">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold"> @{{ user.username }} </h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="w-full p-4  hover:bg-lighter flex">
        <div class="flex-none">
          <img :src="user.profile_image" class="flex-none w-12 h-12 rounded-full border border-lighter"/>
        </div>
        <div class="w-full p-2  flex">
          {{ user.first_name + ' ' + user.last_name }}
        </div>
        <div v-if="!!user.followers" class="w-full p-2  flex">
          followers {{ user.followers.length }}
        </div>
        <div v-if="!!user.following" class="w-full p-2  flex">
          following {{ user.following.length }}
        </div>
        <div v-if="$store.state.me.id!==user.id" class="w-full p-2  flex">
          <button v-if="!followed" @click="follow">
            follow
          </button>
          <button v-if="followed" @click="follow">
            unfollow
          </button>

        </div>
      </div>
      <div class="flex flex-col-reverse border-b">
      </div>
      <show-tweets :tweets="user.tweets"/>
    </div>
    <Trending :trending="getTrends"></Trending>
  </div>
</template>

<script>
import SideNav from "../components/SideNav";
import Trending from "../components/Trending";

import ShowTweets from "@/components/ShowTweets";
import {mapGetters, mapActions} from "vuex";
import axios from "axios";

export default {
  name: 'UserPage',
  components: {
    ShowTweets,
    Trending,
    SideNav,
  },
  data() {
    return {
      id: 'userPage',
      s: this.$route.params.id,
      followed: false,
      user: {}
    }
  },
  computed: {
    getUser() {
      return this.$store.state.me
    },
    ...mapGetters([
      "getTrends", "getTabs", "getMe"]),
    ...mapActions([
      "setMe", "followUser"
    ]),
  },
  mounted() {
    this.setMe
    let url = "user/?id=" + this.$route.params.id + ""
    axios.get(url)
        .then(response => {
              this.user = response.data
              this.followed = this.user.followers.reduce((acc, cv) => {
                    if (cv.user_id === this.$store.state.me.id) {
                      return true
                    }
                    return acc
                  }, false
              )
            }
        )
  },
  methods: {
    follow() {
      this.followed = !this.followed
      axios.post('follow/', {"following_user_id": parseInt(this.$route.params.id)}).then(() => {
      })
    }
  }
}
</script>
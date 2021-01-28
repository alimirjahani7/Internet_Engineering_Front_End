<template>
  <div class="px-5 py-3 border-b-8 border-lighter flex">
    <div class="flex-none">
      <img :src="`${base_url}${getUser.profile_image_url}`"
           class="flex-none w-12 h-12 rounded-full border border-lighter"/>
    </div>


    <form v-on:submit.prevent="addNewTweet" class="w-full px-4 relative"
          :class="{'--exceeded': tweetCharCount > limit}">
      <img v-if="shown_pic" :src='`${shown_pic}`' class="h-20 w-20 flex-none"/>
      <textarea v-model="tweet.content" placeholder="What's up?" class="mt-3 pb-3 w-full focus:outline-none"/>
      <div class="flex items-center">
        <div>
          <label for="profile_pic" class="sr-only">name</label>
          <input style="display: none" id="profile_pic" name="profile_pic"  ref="fileInput" type="file" @change="selectFile"/>
          <button  @click="$refs.fileInput.click()" class="text-lg text-blue mr-4 far fa-image hover:text-darkblue"></button>
        </div>

        <i class="text-lg text-blue mr-4 fas fa-film"></i>
        <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
        <i  class="text-lg text-blue mr-4 far fa-smile"></i>
        <label class="text-lg text-blue mr-4" :class="{'--exceeded': tweetCharCount > limit}">{{
            tweetCharCount
          }}/{{ limit }}</label>
      </div>
      <button
          class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
        Tweet
      </button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "NewTweet",
  data() {
    return {
      tweet: {'content': '', 'image': null},
      shown_pic: null,
      tweets: [],
      base_url: 'http://127.0.0.1:8000',
      limit: 250,
      image_url: ''
    }
  },
  computed: {
    ...mapGetters([
      "getMe"]),
    getUser() {
      return this.$store.state.me
    },
    ...mapGetters([
      "getTrends", "getTabs"]),
    tweetCharCount() {
      return this.tweet.content.length;
    }
  },
  methods: {
    ...mapActions([
      'addTweet'
    ]),
    selectFile(event) {
      this.tweet.image = event.target.files[0];
      this.Preview();
    },
    Preview() {
      if (!this.tweet.image)
        return;
      let reader = new FileReader();
      reader.onload = e => {
        this.shown_pic = e.target.result
      }
      reader.readAsDataURL(this.tweet.image)
    },

    addNewTweet() {

      if (this.tweetCharCount > this.limit)
        return
      if (this.tweetCharCount === 0 && !this.tweet.image)
        return
      if (this.tweet.image){
        const imageForm = new FormData();
        imageForm.append('image', this.tweet.image);
        try {
          axios.post('upload_profile/', imageForm).then(response => {
            this.image_url = response.data.id;
            this.updateUser(true);
          })
        } catch (e) {
          console.log(e)
        }
      } else {
        try {
          this.updateUser(false);
        } catch (e) {
          console.log(e)
        }
      }
      // this.addTweet(newTweet);

    },
    updateUser(withImage) {
      let data = {
        text: this.tweet.content,
      }
      if (withImage)
        data.image = this.image_url;
      this.addTweet(data);
      this.tweet.content = '';
      this.tweet.image = null;
      this.image_url = '';
      this.shown_pic = '';
      // this.$router.push("/profile");
    },
  },
  mounted() {
    this.$store.dispatch("setMe");
  }
}
</script>

<style scoped>
.--exceeded {
  color: red;
}
</style>
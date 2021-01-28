<template>

  <div class="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <i class=" w-13 h-13 text-4xl text-blue fab fa-twitter"></i>
        <h2 class="mt-6 text-left text-3xl font-extrabold">
          Edit Profile
        </h2>
      </div>
      <div class="flex-none mr-2">
        <div v-if="shown_pic" :style="{'background-image': `url(${shown_pic})`}"
             class="h-12 w-12 rounded-full flex-none"></div>
<!--        <img v-if="shown_pic" :src="`url(${shown_pic})`"-->
<!--             class="flex-none w-12 h-12 rounded-full border border-lighter" />-->
        <img v-else-if="profile_image_url" :src="`${base_url}${profile_image_url}`" class="flex-none w-12 h-12 rounded-full border border-lighter"/>
      </div>
      <form class="mt-8 space-y-6" enctype="multipart/form-data" @submit.prevent="handleEdit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="profile_pic" class="sr-only">name</label>
            <input id="profile_pic" name="profile_pic" type="file" @change="selectFile"
                   class="">
          </div>
          <div>
            <label for="name" class="sr-only">name</label>
            <input id="name" name="name" type="text" autocomplete="name" required v-model="first_name"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-dark placeholder-dark rounded-t-md sm:text-sm"
                   placeholder="First Name">
          </div>
          <div>
            <label for="fname" class="sr-only">username</label>
            <input id="fname" name="fname" type="text" autocomplete="fname" required v-model="last_name"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-dark placeholder-dark sm:text-sm"
                   placeholder="Last Name">
          </div>
          <div>
            <label for="username" class="sr-only">username</label>
            <input id="username" name="username" type="text" autocomplete="username" required v-model="username"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-dark placeholder-dark sm:text-sm"
                   placeholder="username">
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required v-model="email"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-dark placeholder-dark sm:text-sm"
                   placeholder="Email address">
          </div>
        </div>
        <div>
          <button
              class="group relative w-full justify-center py-2 px-4  text-sm font-medium rounded-full text-white bg-blue hover:bg-darkblue ">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>

import axios from "axios";

export default {
  name: 'EditProfile',
  data() {
    return {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      shown_pic: null,
      profile_image: null,
      profile_image_url: "",
      base_url: 'http://127.0.0.1:8000',
    }
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      // console.log("fetch user")
      axios.get('user/').then(response => {
        this.username = response.data.username;
        this.first_name = response.data.first_name;
        this.last_name = response.data.last_name;
        this.email = response.data.email;
        this.profile_image_url = response.data.profile_image_url;
      })
      console.log(this.profile_image_url)
      this.Preview();
    },
    selectFile(event) {
      // console.log("select file")
      this.profile_image = event.target.files[0];
      this.Preview();
    },
    handleEdit() {
      // console.log("in handle edit")
      if (this.profile_image){
        const imageForm = new FormData();
        imageForm.append('image', this.profile_image);
        try {
          axios.post('upload_profile/', imageForm).then(response => {
            this.profile_image_url = response.data.image;
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

    },

    updateUser(withImage) {
      let data = {
        username: this.username,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
      }
      if (withImage)
        data.profile_image_url = this.profile_image_url;
      axios.patch('user/', data)
      this.$router.push("/profile");
    },
    Preview() {
      if (!this.profile_image)
        return;
      let reader = new FileReader();
      reader.onload = e => {
        this.shown_pic = e.target.result
      }
      reader.readAsDataURL(this.profile_image)
    }
  }
}
</script>
<template>
  <div class="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <i class=" w-13 h-13 text-4xl text-blue fab fa-twitter"></i>
        <h2 class="mt-6 text-left text-3xl font-extrabold">
          Sign up for a twitter account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
        <div class="rounded-md shadow-sm -space-y-px">
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
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required
                   v-model="password"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-dark placeholder-dark sm:text-sm"
                   placeholder="Password">
          </div>
          <div>
            <label for="cpassword" class="sr-only">Confirm Password</label>
            <input id="cpassword" name="cpassword" type="password" required v-model="confirm_password"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-dark placeholder-dark rounded-b-md sm:text-sm"
                   placeholder="Confirm Password">
          </div>
        </div>
        <div>
          <button
              class="group relative w-full justify-center py-2 px-4  text-sm font-medium rounded-full text-white bg-blue hover:bg-darkblue ">
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      username: '',
      first_name: '',
      last_name: '',
      confirm_password: ''
    }
  },
  methods: {
    async handleRegister() {
      const response =
      await axios.post('register', {
        email: this.email,
        password: this.password,
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username
      })

      console.log(response);

      this.$router.push("/login");

    }
  }
}


</script>
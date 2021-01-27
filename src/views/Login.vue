<template>
  <div class="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <i class=" w-13 h-13 text-4xl text-blue fab fa-twitter"></i>
        <h2 class="mt-6 text-left text-3xl font-extrabold">
          Log in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <error v-if="error" :error="error"/>
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Email address</label>
            <input id="username" name="username" type="text" autocomplete="username" required v-model="username"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-dark placeholder-dark rounded-t-md sm:text-sm"
                   placeholder="username">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required
                   v-model="password"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-dark placeholder-dark rounded-b-md sm:text-sm"
                   placeholder="Password">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember_me" name="remember_me" type="checkbox"
                   class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-blue hover:text-darkblue">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
              class="group relative w-full justify-center py-2 px-4 text-sm font-medium rounded-full text-white bg-blue hover:bg-darkblue ">
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>

</template>


<script>
import axios from 'axios'
import Error from "../components/Error";

export default {
  name: 'Login',
  components: {
    Error
  },
  data() {
    return {
      username: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async handleLogin() {
      // this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long'
      try {
        const response = await axios.post('token/', {
          username: this.username,
          password: this.password
        });
        localStorage.setItem('access-token', response.data.access);
        axios.defaults.headers.common ['Authorization'] = 'Bearer ' + localStorage.getItem('access-token')
        const user = await axios.get('user/', );
        this.$store.dispatch('setMe', user.data);
        this.$router.push('/home')
      } catch (e) {
        this.error = 'Wrong user/password'
      }
    }
  }
}
</script>
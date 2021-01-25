<template>
  <div id='app'>
    <h1>hii</h1>
    <div id='nav'>
      <router-link to='/home'> Home</router-link>
      <router-link to='/login'>login </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

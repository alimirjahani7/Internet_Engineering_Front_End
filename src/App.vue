<template>
  <div id='app'>
<!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css" />-->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      base_url: 'http://127.0.0.1:8000'
    }
  }
}
</script>

<template>
  <div class="text-dark">{{ error }}</div>
</template>

<script>
  export default {
    name: 'Error',
    props: ['error']
  }
</script>
<template>
  <User :username="$route.params.username"></User>
</template>

<script>

import User from "@/components/User";

export default {
  name: 'UserPage',
  components: {
    User
  },
  data() {
    return {
      s: this.$route.params.id,
      id: 'userPage',
    }
  },
}
</script>
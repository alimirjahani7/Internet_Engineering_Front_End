<template>
  <User :username="getMe.username"></User>
</template>

<script>

import User from "@/components/User";
import {mapGetters} from "vuex";

export default {
  name: 'UserPage',
  components: {
    User
  },
  computed: {
    ...mapGetters([
      "getMe"])
  },
  data() {
    return {
      id: 'userPage',
    }
  },
}
</script>
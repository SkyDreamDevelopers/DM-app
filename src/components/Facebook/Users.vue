<template>
  <q-page-container>
    <q-page>
      <h1>Hi</h1>
     <ul>
         <li v-for="(item, index) in media" :key="index">{{ item.mediaName }}</li>
     </ul>
    </q-page>
  </q-page-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Users",
  computed: {
    ...mapState("Social", ["media"])
  }
}
</script>

<style lang="scss" scoped></style>

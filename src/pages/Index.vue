<template>
  <div>

     <q-banner class="bg-warning text-white">
       <span class="font-size-1 center vertical-middle">Welcome</span>  <q-chip color="deep-orange" text-color="white" icon="email">
        {{ userName }}
      </q-chip>
      </q-banner>

       <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/logo.png"
    >
  </q-page>
  </div>
 
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: 'PageIndex',
  computed: {
      ...mapState('Auth', ["userName"])
  },
}
</script>

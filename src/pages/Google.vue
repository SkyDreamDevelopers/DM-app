<template>
    <div>
         <q-banner class="bg-warning text-white">
       <span class="font-size-1 center vertical-middle">Welcome</span>  <q-chip color="deep-orange" text-color="white" icon="email">
        {{ userName }}
      </q-chip>
      </q-banner>
      <div class="flex flex-center">
        <google-login></google-login>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
    import GoogleLogin from 'src/components/Google/GoogleLogin'
    export default {
        name: 'Google',
         computed: {
      ...mapState('Auth', ["userName"])
  },
        components: {
            GoogleLogin
        }
    }
</script>

<style lang="scss" scoped>

</style>
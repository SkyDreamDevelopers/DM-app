<template>
    <div>
        <q-banner class="bg-grey-3 col">
      <template v-slot:avatar>
        <q-icon name="account_circle" color="primary" />
      </template>
      <div>{{ tab | titleCase }} to access.</div>
      <div> Please contact <a href="https://thesocialformula.net">The Social Formula</a> to get access.</div>
    </q-banner>

    <form @submit.prevent="submitForm">
  <div class="row q-mb-md"></div>

  <!-- Email input -->
    <div class="row q-mb-md">
    <q-input 
    :rules="[ val => isValidEmail(val) || 'Please enter a valid email']" 
    v-model="formData.email"
    outlined 
    label="Email"
    class="col"
     ref="email"
     lazy-rules
     />
    </div>
    
    <!-- Password input -->
    <div class="row q-mb-md">
    <q-input
    :rules="[ val => val.length >= 6 || 'Please use minimum 6 characters']" 
    outlined 
    v-model="formData.password"
    label="Password"
    type="password"
    class="col"
     ref="password"
     lazy-rules
     />
    </div>

    <!-- Submit button -->
    <div class="row">
      <q-space />
      <q-btn
        color="primary"
        :label="tab"
        type="submit" />
    </div>
</form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        props: ['tab'],
        name: 'Register',
        data(){
            return {
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions('Auth', ['registerUser', 'loginUser']),

            submitForm(){
                this.$refs.email.validate()
                this.$refs.password.validate()
                if(!this.$refs.email.hasError && !this.$refs.password.hasError) {
                   if(this.tab == 'login'){
                      this.loginUser(this.formData)
                   } else {
                      this.registerUser(this.formData)
                   }
                }
            },

            isValidEmail(email){
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase()); 
            }
        },
        filters: {
            titleCase(value){
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
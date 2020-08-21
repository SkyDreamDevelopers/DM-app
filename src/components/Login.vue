<template>
<form @submit.prevent="submitForm">
  <div class="row q-mb-md">
    <q-banner class="bg-grey-3 col">
      <template v-slot:avatar>
        <q-icon name="account_circle" color="primary" />
      </template>
      <div>Please login to access.</div>
      <div> Please contact <a href="https://thesocialformula.net">The Social Formula</a> to get access.</div>
    </q-banner>
  </div>

  <!-- Email input -->
    <div class="row q-mb-md">
    <q-input 
    outlined 
    label="Email"
    class="col"
     lazy-rules
     ref="email"
     />
    </div>
    
    <!-- Password input -->
    <div class="row q-mb-md">
    <q-input 
    outlined 
    label="Password"
    type="password"
    class="col"
     lazy-rules
     ref="password"
     />
    </div>

    <!-- Submit button -->
    <div class="row">
      <q-space />
      <q-btn color="primary" 
      label="Submit" type="submit" />
    </div>
</form>
</template>

<script>
    export default {
        methods: {
          
        }
    }
</script>

<style lang="scss" scoped>

</style>
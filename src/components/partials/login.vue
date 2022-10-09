<template>
  <loginForm></loginForm>
</template>

<script>
  import loginForm from "@/components/molecules/LoginForm.vue";
  import Mixin from '@/mixins'
  
  export default {
    mixins: [Mixin],
    name: "Login",
    title: "Healthcare App - Login page",
    components: {
        loginForm
    }
  };
  </script>
  
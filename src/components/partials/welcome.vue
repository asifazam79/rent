<template>
  <div class="welcome">
    <a class="backLink" href="/contact-details">&lt; Back to contact details page</a>
    <h1> Welcome {{ lastName }}!</h1>
  </div>
</template>

<script>
  import store from '@/store';
  import Mixin from '@/mixins';

  export default {
    mixins: [Mixin],
    name: "Welcome",
    title: "Healthcare App - Welcome page",
    data () {
      return {
        lastName: store.state.lastName
      };
    }
  };
  </script>

<style scoped>
  h1 {
    color: #107433;
    font-family: arial, sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.09375;
    display: block;
    margin-top: 0;
    margin-bottom: 30px;
    clear: both;
  }
  .backLink {
    font-weight: bold;
    margin-bottom: 15px;
    float: left;
  }
</style>
  
<template>
  <contactDetails></contactDetails>
</template>

<script>
  import contactDetails from "../molecules/ContactDetails.vue";
  import Mixin from '@/mixins';
  
  export default {
    mixins: [Mixin],
    name: "Contact",
    title: "Healthcare App - Contact details page",
    components: {
      contactDetails
    }
  };
  </script>
  
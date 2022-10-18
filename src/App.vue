<template>
  <div id="app">
    <appHeader></appHeader>
    <article>
      <section>
        <router-view />
      </section>
    </article>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "./components/molecules/Header.vue";
import appFooter from "./components/molecules/Footer.vue";

export default {
  name: "App",
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
article {
  background-color: #F8F8F8;
}
section {
  margin: 0 auto;
  max-width: 1024px;
  background-color: #FFF;
  padding: 20px;
  text-align: left;
  overflow: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

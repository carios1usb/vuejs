<template>
  <div class="nav">
    <div class="headline"></div>
    <nav>
      <nuxt-link to="/">
        <VivendoLogo />
      </nuxt-link>
      <!-- <nuxt-link to="/">Home</nuxt-link>&nbsp;| -->
      <nuxt-link to="/proyectos">Proyectos</nuxt-link>
    </nav>
  </div>
</template>
<script>
import VivendoLogo from "~/components/VivendoLogo.vue";
export default {
  components: {
    VivendoLogo
  }
};
</script>
<style scoped>
.headline {
  color: #aaaaaa;
  background: #111111;
  font-size: 0.928em;
  min-height: 33px;
  display: block;
  width: 100%;
}
.brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
nav {
  font-family: "Raleway", sans-serif;
  width: 100%;
  border-radius: 0;
  box-shadow: 0 2px 3px -2px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 2px 3px -2px rgba(0, 0, 0, 0.4);
  border: none;
  margin-bottom: 0;
  padding: 0 60px;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
  padding: 0 10px;
  color: #c22821;
}
</style>

<template>
  <v-app>
    <NavBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar/NavBar";

export default {
  name: "App",

  components: {
    NavBar,
  },
};
</script>

<style>
@font-face {
  font-family: elementary;
  src: url("./assets/fonts/Elementary_Gothic_Bookhand.otf");
}

.btn {
  color: white !important;
  background: black !important;
}

.titulo {
  font-size: 1.6rem;
  font-family: elementary;
}

</style>

<template>
  <v-app>
    <NavBar />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
export default {
  name: "App",

  components: {
    NavBar,
    Footer,
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

.bloco__texto {
  width: 100%;
}

.section__bloco {
  width: 49vh;
}

.section {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>

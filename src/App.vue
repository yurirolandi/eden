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
import { requestAxios } from "./server/axios";
import { mapMutations, mapActions } from "vuex";
export default {
  name: "App",

  components: {
    NavBar,
    Footer,
  },

  data() {
    return {
      validationToken: true,
    };
  },

  methods: {
    ...mapMutations(["setUser"]),
    ...mapActions(["getColunas"]),
    async validateToken() {
      this.validatingToken = true;
      const json = localStorage.getItem("User");
      const userData = JSON.parse(json);
      this.setUser("");

      if (!userData) {
        this.validatingToken = false;
        if (this.$router.options.base === "/") return;
        this.$router.push({ path: "/" });
      }

      const response = await requestAxios.get("/api/login", {
        params: {
          email: userData.email,
        },
      });
      if (response.data) {
        this.setUser(userData);
      } else {
        localStorage.removeItem("User");
        this.$router.push({ path: "/" });
      }

      this.validatingToken = false;
    },
  },

  created() {
    this.validateToken();
    this.getColunas();
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

.home {
  background-image: url("./assets/img/backsite2.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  min-height: 80vh;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>

<template>
  <div class="navbar">
    <v-app-bar app color="white">
      <div class="d-flex align-center">
        <v-app-bar-nav-icon v-if="logged" @click="toggleMenu" />
      </div>

      <div class="redondo">
        <div class="logo">
          <img
            class="img-logo"
            src="../../assets/img/bolinhadoyuri.png"
            @click="home"
            alt=""
          />
        </div>
      </div>
      <v-spacer></v-spacer>

      <div
        class="area-login"
        v-if="
          $route.name !== 'Login' && $route.name !== 'CreateAccount' && !logged
        "
      >
        <v-btn :to="'/login'" class="btn">Login</v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon size="40">mdi-account-circle-outline</v-icon>
          <!-- <v-img src="../../assets/logo.png"></v-img> -->
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{logged.nome}}</v-list-item-title>
          <v-list-item-subtitle>Level</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              ><button @click.prevent="logout">
                Sair
              </button></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      items: [
        { title: "Inicio", icon: "mdi-view-dashboard", route: "/home-user" },
        { title: "Estudos", icon: "mdi-school", route: "/notfound" },
        { title: "Historia", icon: "mdi-book", route: "/notfound" },
        { title: "Escola", icon: "mdi-school", route: "/notfound" },
        { title: "Imagens", icon: "mdi-image", route: "/notfound" },
        { title: "Orações", icon: "mdi-hand-heart", route: "/notfound" },
      ],
      drawer: false,
    };
  },
  methods: {
    ...mapMutations(["setUser"]),
    toggleMenu() {
      this.drawer = !this.drawer;
    },
    logout() {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("User");
      if (token && user) {
        localStorage.removeItem("token");
        localStorage.removeItem("User");
        this.setUser(null);
        return this.$router.push({ path: "/" });
      }
    },
    home() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
  },
  computed: {
    ...mapGetters({
      logged: "getLogged",
    }),
  },
};
</script>

<style scoped>
.area-login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.area-login__icon {
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin: 0.5rem;
}
p.tooltip-paragrafo {
  margin-bottom: 0;
  text-align: center;
}
.login-tooltip {
  width: 100%;
}
.login-tooltip__cadastro,
.login-tooltip__btn,
.login-tooltip__titulo {
  margin: 1rem;
}
.theme--dark.v-btn--active:hover::before,
.theme--dark.v-btn--active::before {
  opacity: 0;
}
.redondo {
  width: 100%;
  display: flex;
  justify-content: center;
}
.logo {
  display: flex;
  margin-top: 5rem;
  justify-content: center;
  cursor: pointer;
  transition: 1s ease;
  width: 150px;
}

.logo:hover {
  transform: scale(1.3);
}
.img-logo {
  width: 150px;
  height: 100px;
}

@media only screen and (max-width: 414px) {
  .img-logo {
    width: 170px;
    height: 120px;
  }
}
</style>

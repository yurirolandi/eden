<template>
  <div class="navbar">
    <v-app-bar app color="white">
      <div class="d-flex align-center">
        <v-app-bar-nav-icon v-if="logged" @click="toggleMenu" />

        <!-- <div class="nav-bar__logo">
          <v-btn :to="'/'" text>Portões do Eden</v-btn>
        </div> -->
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
        v-if="$route.name !== 'Login' && $route.name !== 'CreateAccount'"
      >
        <v-btn :to="'/login'" class="btn">Login</v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../../assets/logo.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Nome</v-list-item-title>
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
                Logout
              </button></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard", route: "/" },
        // { title: "Login", icon: "mdi-login", route: "/login" },
        // { title: "About", icon: "mdi-forum", route: "/tools" },
      ],
      drawer: false,
    };
  },
  methods: {
    toggleMenu() {
      this.drawer = !this.drawer;
    },
    logout() {
      console.log("deslogando");
    },
    home() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
  },
  computed: {
    ...mapGetters({
      logged: "logged",
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
}
.logo {
  display: flex;
  margin-top: 5rem;
  justify-content: center;
  cursor: pointer;
}
.img-logo {
  width: 200px;
  height: 150px;
}

@media only screen and (max-width: 414px) {
  .img-logo {
    width: 170px;
    height: 120px;
  }
}
</style>

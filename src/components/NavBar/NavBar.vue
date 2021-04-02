<template>
  <div class="navbar">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon v-if="logged" @click="toggleMenu" />

        <div class="nav-bar__logo">
          <h4>Portões do Eden</h4>
        </div>
      </div>

      <v-spacer></v-spacer>

      <div class="area-login">
        <div class="area-login__icon">
          <v-icon>mdi-account</v-icon>
        </div>
        <Tooltip>
          <template v-slot:tooltip-title>
            <p class="tooltip-paragrafo">
              Ainda não tem login ? <br />
              cadastre-se
            </p>
          </template>
          <template v-slot:tooltip-content>
            <div class="login-tooltip">
              <div class="login-tooltip__titulo">
                pra ver seus estudos e ter uma experiência personalizada, acesse
                sua conta :)
              </div>
              <div class="login-tooltip__btn">
                <v-btn :to="'/login'">Entrar</v-btn>
              </div>
              <div class="login-tooltip__cadastro">Cadastrar</div>
            </div>
          </template>
        </Tooltip>
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
import Tooltip from "../shared/Tooltip";

export default {
  name: "NavBar",
  components: { Tooltip },
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
</style>

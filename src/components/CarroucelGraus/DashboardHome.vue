<template>
  <v-sheet class="mx-auto sm mt-5" elevation="3">
    <v-slide-group
      v-if="colunas"
      v-model="model"
      class="pa-4"
      show-arrows
      center-active
    >
      <v-slide-item v-for="(grau, i) in colunas" :key="i">
        
        <v-card
          class="ma-2"
          :class="{
            gradiente: grau.title === 'Coluna 12',
            disabledGrau: logado && logado.acesso < grau.acesso,
          }"
          height="300"
          width="200"
          :color="grau.backgroundColor"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="grau-content">
                <div class="header">
                  <div
                    class="grau-title"
                    :style="{ color: grau.title === 'Coluna 11' ? '#000' : '' }"
                  >
                    {{ grau.title }}
                  </div>
                </div>
                <div class="main">
                  <div
                    class="grau-subtitle"
                    :class="{ grau3: grau.title === 'Coluna 12' }"
                    :style="{
                      backgroundColor:
                        grau.title !== 'Coluna 12' ? grau.color : '',
                      color: grau.title === 'Coluna 11' ? '#000' : '',
                    }"
                  >
                    {{ grau.grau3 }}
                  </div>
                  <div
                    v-if="grau.grau2"
                    class="grau-subtitle"
                    :class="{ grau2: grau.title === 'Coluna 12' }"
                    :style="{
                      backgroundColor:
                        grau.title !== 'Coluna 12' ? grau.color : '',
                      color: grau.title === 'Coluna 11' ? '#000' : '',
                    }"
                  >
                    {{ grau.grau2 }}
                  </div>
                  <div
                    v-if="grau.grau1"
                    class="grau-subtitle"
                    :class="{ grau1: grau.title === 'Coluna 12' }"
                    :style="{
                      backgroundColor:
                        grau.title !== 'Coluna 12' ? grau.color : '',
                      color: grau.title === 'Coluna 11' ? '#000' : '',
                    }"
                  >
                    {{ grau.grau1 }}
                  </div>
                </div>
                <div class="footer">
                  <div
                    class="grau-footer"
                    :style="{ color: grau.title === 'Coluna 11' ? '#000' : '' }"
                  >
                    {{ grau.subtitle }}
                  </div>
                </div>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <div v-else class="pa-5 text-center">
      <v-progress-circular
        class="pa-5 text-center"
        indeterminate
        color="black"
      ></v-progress-circular>
    </div>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ColumGrau",
  data() {
    return {
      model: null,
    };
  },

  computed: {
    ...mapGetters({
      colunas: "getColunas",
      logado: "getLogged",
    }),
  },
};
</script>

<style scoped>
.v-list-item__title,
.v-list-item__subtitle {
  overflow: initial;
}
.v-list-item__content {
  overflow: initial;
}
.v-list-item__subtitle {
  height: 9rem;
}

.disabledGrau{
  cursor: not-allowed;
  opacity: 0.7;
}

.grau-title {
  font-family: elementary;
  font-size: 1.3rem;
  color: white;
}
.grau-subtitle {
  background: red;
  padding: 10px 0;
  margin: 5px 0;
  border-radius: 8px;
  color: white;
}
.header {
  width: 100%;
  height: 50px;
  margin: 0.5rem 0rem;
  text-align: center;
}
.main {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
}
.footer {
  text-align: center;
  margin-top: 1rem;
  color: white;
}
.grau3 {
  background-color: #4a005a;
}
.grau2 {
  background-color: #b200db;
}
.grau1 {
  background-color: #d400f5;
}
.mx-auto.mt-5.v-sheet.theme--light.elevation-3 {
  border-radius: 8px;
}

.ma-3.v-card.v-sheet.theme--light {
  border-radius: 10px;
}

.gradiente {
  background: rgb(78, 0, 95);
  background: linear-gradient(
    0deg,
    rgba(78, 0, 95, 1) 0%,
    rgba(131, 0, 161, 1) 22%,
    rgba(187, 0, 229, 1) 78%
  );
}

@media only screen and (max-width: 820px) {
  .v-sheet {
    max-width: 100% !important;
  }
}

@media only screen and (max-width: 450px) {
  .v-sheet {
    max-width: 340px !important;
  }
}

@media only screen and (max-width: 340px) {
  .v-sheet {
    max-width: 300px !important;
  }
}
</style>

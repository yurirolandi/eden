<template>
  <v-sheet class="mx-auto mt-5" elevation="3" max-width="990">
    <v-slide-group v-model="model" class="pa-4" show-arrows>
      <v-slide-item v-for="(grau, i) in colunas" :key="i">
        <v-card
          class="ma-2"
          :class="{gradiente : grau.title === 'Coluna 12'}"
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
  </v-sheet>
</template>

<script>
export default {
  name: "ColumGrau",
  data() {
    return {
      model: null,
      colunas: [
        {
          title: "Coluna 1",
          grau3: "Fruto da Vida",
          grau2: "Nascido da Carne",
          grau1: "Filho da Terra",
          subtitle: "1° a 3° grau",
          color: "#cc0000",
          backgroundColor: "#ff0000",
        },
        {
          title: "Coluna 2",
          grau3: "Fruto da Vida",
          grau2: "Nascido da Carne",
          grau1: "Filho da Terra",
          subtitle: "1° a 3° grau",
          color: "#ff6600",
          backgroundColor: "#ff7f2a",
        },
        {
          title: "Coluna 3",
          grau3: "Fruto da Vida",
          grau2: "Nascido da Carne",
          grau1: "Filho da Terra",
          subtitle: "1° a 3° grau",
          color: "#dbd12b",
          backgroundColor: "#ffd42a",
        },
        {
          title: "Coluna 4",
          grau3: "Fruto da Vida",
          grau2: "Nascido da Carne",
          grau1: "Filho da Terra",
          subtitle: "1° a 3° grau",
          color: "#005f00",
          backgroundColor: "#008000",
        },
        {
          title: "Coluna 5",
          grau3: "Fruto da Vida",
          grau2: "Nascido da Carne",
          grau1: "Filho da Terra",
          subtitle: "1° a 3° grau",
          color: "#0000ad",
          backgroundColor: "#0000ff",
        },
        {
          title: "Coluna 6",
          grau3: "Fruto da Vida",
          grau2: "Nascido da Carne",
          grau1: "Filho da Terra",
          subtitle: "1° a 3° grau",
          color: "#0f0f36",
          backgroundColor: "#161650",
        },
        {
          title: "Coluna 7",
          grau3: "Fruto da Vida",
          grau2: "Nascido da Carne",
          grau1: "Filho da Terra",
          subtitle: "1° a 3° grau",
          color: "#563118",
          backgroundColor: "#784421",
        },
        {
          title: "Coluna 8",
          grau3: "Fruto da Vida",
          grau2: "Nascido da Carne",
          grau1: "Filho da Terra",
          subtitle: "1° a 3° grau",
          color: "#636363",
          backgroundColor: "#999999",
        },
        {
          title: "Coluna 9",
          grau3: "Fruto da Vida",
          grau2: "Nascido da Carne",
          grau1: "Filho da Terra",
          subtitle: "1° a 3° grau",
          color: "#2b2b2b",
          backgroundColor: "#000000",
        },
        {
          title: "Coluna 10",
          grau3: "Fruto da Vida",
          grau2: "Nascido da Carne",
          grau1: "Filho da Terra",
          subtitle: "1° a 3° grau",
          color: "#a51597",
          backgroundColor: "#bd18ae",
        },
        {
          title: "Coluna 11",
          grau3: "Fruto da Vida",
          grau2: "Nascido da Carne",
          grau1: "Filho da Terra",
          subtitle: "1° a 3° grau",
          color: "#dcdcdc",
          backgroundColor: "#ffffff",
        },
        {
          title: "Coluna 12",
          grau3: "Fruto da Vida",
          grau2: "Nascido da Carne",
          grau1: "Filho da Terra",
          subtitle: "1° a 3° grau",
          color: "#4a005a",
          backgroundColor: "#c800f5",
        },
      ],
    };
  },
  methods: {
    teste() {
      console.log("active");
    },
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
    max-width: 500px !important;
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
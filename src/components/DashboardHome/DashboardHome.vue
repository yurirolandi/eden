<template>
  <v-sheet class="mx-auto mt-5" elevation="3">
    <v-slide-group v-model="model" class="pa-4" show-arrows>
      <v-slide-item v-for="(grau, i) in colunas" :key="i">
        <v-card class="ma-3" height="300" width="180">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ grau.title }}</div>
              <v-list-item-title class="headline mb-3">
                {{ grau.subtitle }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ grau.texto }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn text @click.stop="teste"> Ler Mais </v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: "SectionGrau",
  data() {
    return {
      model: null,
      colunas: [
        {
          title: "Coluna 1",
          subtitle: "Subtitle grau",
          texto: "Lorem ipsum Lorem ipsum Lorem ipsum Coluna 1",
        },
        {
          title: "Coluna 2",
          subtitle: "Subtitle grau",
          texto: "Lorem ipsum Lorem ipsum Lorem ipsum Coluna 2",
        },
        {
          title: "Coluna 3",
          subtitle: "Subtitle grau",
          texto: "Lorem ipsum Lorem ipsum Lorem ipsum Coluna 3",
        },
        {
          title: "Coluna 4",
          subtitle: "Subtitle grau",
          texto: "Lorem ipsum Lorem ipsum Lorem ipsum Coluna 4",
        },
        {
          title: "Coluna 5",
          subtitle: "Subtitle grau",
          texto: "Lorem ipsum Lorem ipsum Lorem ipsum Coluna 5",
        },
        {
          title: "Coluna 6",
          subtitle: "Subtitle grau",
          texto: "Lorem ipsum Lorem ipsum Lorem ipsum Coluna 6",
        },
        {
          title: "Coluna 7",
          subtitle: "Subtitle grau",
          texto: "Lorem ipsum Lorem ipsum Lorem ipsum Coluna 7",
        },
        {
          title: "Coluna 8",
          subtitle: "Subtitle grau",
          texto: "Lorem ipsum Lorem ipsum Lorem ipsum Coluna 8",
        },
        {
          title: "Coluna 9",
          subtitle: "Subtitle grau",
          texto: "Lorem ipsum Lorem ipsum Lorem ipsum Coluna 9",
        },
        {
          title: "Coluna 10",
          subtitle: "Subtitle grau",
          texto: "Lorem ipsum Lorem ipsum Lorem ipsum Coluna 10",
        },
        {
          title: "Coluna 11",
          subtitle: "Subtitle grau",
          texto: "Lorem ipsum Lorem ipsum Lorem ipsum Coluna 11",
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
.v-list-item__content{
    overflow: initial;
}
.v-list-item__subtitle {
    height: 9rem;
}
</style>
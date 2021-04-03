<template>
  <div class="section-historia">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="titulo mb-5">História</h1>
          <p class="text-justify paragrafo">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.There are many variations of passages
            of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of
            Lorem Ipsum, you need to be sure there isn't anything embarrassing
            hidden in the middle of text.
          </p>
        </v-col>
        <v-col>
          <h1 class="titulo mb-5">Fotos</h1>
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SectionHistoria",
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.section-historia {
  width: 100%;
  margin: 15rem 3rem;
}

.titulo {
  color: #d4aa06;
}
.paragrafo {
  color: white;
  font-size: 1rem;
  letter-spacing: 2px;
}

.assinatura-logo {
  width: 29rem;
  margin-left: 18rem;
}
.v-window.v-item-group.theme--dark.v-carousel {
  width: 800px;
  height: 400px !important;
}
</style>
<template>
  <div class="section-historia">
    <div class="section">
      <div class="section__bloco">
        <h1 class="titulo mb-5">História</h1>
        <div class="bloco__texto">
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
        </div>
      </div>
      <div class="section__bloco">
        <h1 class="titulo mb-5">Fotos</h1>
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </div>
    </div>
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
  margin: 6rem 0rem;
  display: flex;
  align-content: center;
}
.section {
  justify-content: space-between;
}

.titulo {
  color: #d4aa06;
}
.paragrafo {
  color: white;
  font-size: 1rem;
  letter-spacing: 2px;
}

.section__bloco {
  width: 75vh;
}

.v-window.v-item-group.theme--dark.v-carousel {
  height: 400px !important;
}


@media only screen and (max-width: 414px) {
  .v-window.v-item-group.theme--dark.v-carousel {
    width: 100%;
  }
  .section__bloco {
    width: 97%;
    max-width: 97%
  }
}

@media only screen and (max-width: 320px) {
  .section__bloco {
    min-width: 287px;
    max-width: 97%
  }
}
</style>

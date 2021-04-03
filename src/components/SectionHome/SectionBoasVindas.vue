<template>
  <div class="section-wellcome">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="titulo mb-5">Carta de Boas Vindas</h1>
          <div class="bloco__texto">
            <p class="text-justify paragrafo">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words
              etc.There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>

          <img class="assinatura-logo" src="../../assets/img/image3344-4.png" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SectionBoasVindas",
};
</script>

<style scoped>
.section-wellcome {
  width: 100%;
  margin: 10rem 3rem;
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
  width: 21rem;
}

.bloco__texto {
  width: 55vw;
}

@media only screen and (max-width: 450px) {
  .bloco__texto {
    width: 100%;
  }
  .assinatura-logo {
    width: 15rem;
  }
}

@media only screen and (max-width: 800px) {
  .bloco__texto {
    width: 100%;
  }
  .assinatura-logo {
    width: 15rem;
  }
}
</style>

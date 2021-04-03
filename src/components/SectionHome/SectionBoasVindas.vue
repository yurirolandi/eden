<template>
  <div class="section-wellcome">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="titulo">Carta de Boas Vindas</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
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
      </v-row>
      <v-row class="mt-0">
        <v-col>
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
  max-width: 50rem;
  margin-top: 15rem;
  margin-right: 59rem;
  justify-content: center;
  align-items: center;
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
</style>
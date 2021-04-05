<template>
  <v-footer dark padless>
    <v-card flat tile class="white lighten-1 text-center footer">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 black--text"
          icon
          :href="icon.link"
          target="_blank"
        >
          <v-icon size="24px">
            {{ icon.icone }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="black--text pt-0">
        ESCOLA DE MISTÉRIOS PORTÔES DO ÉDEN <br />

        <p class="mt-6 subtitulo text-center">Ainda não sou membro ?</p>
        <div class="mt-8 auto">
          <v-btn :to="'/create-account'" color="black" text
            >Candidatar-se</v-btn
          >
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--text">
        {{ new Date().getFullYear() }} —
        <strong>ESCOLA DE MISTÉRIOS PORTÕES DO ÉDEN</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        icone: "mdi-facebook",
        link: "https://www.facebook.com/",
      },
      {
        icone: "mdi-instagram",
        link: "https://www.instagram.com/",
      },
      {
        icone: "mdi-youtube",
        link: "https://www.youtube.com/",
      },
    ],
  }),
};
</script>

<style scoped>
.footer {
  width: 100%;
}
</style>

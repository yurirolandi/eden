<template>
  <div class="home">
    <v-container>
      <SectionBoasVindas />
      <SectionHistoria />
      <SectionGrau />
    </v-container>
  </div>
</template>

<script>
import SectionBoasVindas from "../components/SectionHome/SectionBoasVindas";
import SectionHistoria from "../components/SectionHome/SectionHistoria";
import SectionGrau from "../components/SectionHome/SectionGraus";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: { SectionBoasVindas, SectionHistoria, SectionGrau },
  methods: {
    ...mapActions(["getColunas"]),
  },
  created() {
    this.getColunas();
  },
};
</script>


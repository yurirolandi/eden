<template>
  <div class="home">
    <SectionBoasVindas />
    <SectionHistoria />
    <SectionGrau />
  </div>
</template>

<script>
import SectionBoasVindas from "../components/SectionHome/SectionBoasVindas";
import SectionHistoria from "../components/SectionHome/SectionHistoria";
import SectionGrau from "../components/SectionHome/SectionGraus";
export default {
  name: "Home",
  components: { SectionBoasVindas, SectionHistoria, SectionGrau },
};
</script>

<style scoped>
.home {
  background-image: url("../assets/img/backsite2.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;

  background-attachment: fixed;
  display: flex;
  flex-direction: column;
}
</style>

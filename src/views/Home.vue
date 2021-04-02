<template>
  <div class="home">
    <SectionBoasVindas />
    <SectionHistoria />
  </div>
</template>

<script>
// import WellcomeEden from "../components/SectionHome/WellcomeEden";
// import SectionGrau from '../components/DashboardHome/DashboardHome'
import SectionBoasVindas from "../components/SectionHome/SectionBoasVindas";
import SectionHistoria from "../components/SectionHome/SectionHistoria";
export default {
  name: "Home",
  components: { SectionBoasVindas, SectionHistoria },
};
</script>

<style scoped>
.home {
  background-image: url("/img/backsite2.fd040a48.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;

  display: flex;
  flex-direction: column;
}
</style>

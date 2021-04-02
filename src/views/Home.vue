<template>
  <div class="home">
    <div class="container">
      <h1>Home</h1>
      <WellcomeEden />
      <SectionGrau />
    </div>
  </div>
</template>

<script>
import WellcomeEden from "../components/SectionHome/WellcomeEden";
import SectionGrau from '../components/DashboardHome/DashboardHome'
export default {
  name: "Home",
  components: { WellcomeEden, SectionGrau },
};
</script>

<style scoped>
.home {
  background-image: url("../assets/img/backsite.png");
  background-size: cover;
  height: 100%;
}
</style>

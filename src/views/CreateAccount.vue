<template>
  <div class="create-login">
    <CreateLogin />
  </div>
</template>
<script>
import CreateLogin from "../components/CreateAccount/CreateLogin.vue";
export default {
  name: "CreateAccount",
  components: { CreateLogin },
};
</script>
<style scoped>
.create-login {
  background-image: url("../assets/img/backsite.png");
  background-size: cover;
  height: 100%;
}
</style>

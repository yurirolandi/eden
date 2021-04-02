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
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

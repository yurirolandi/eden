<template>
  <div class="login">
    <UserLogin />
  </div>
</template>
<script>
import UserLogin from "../components/Login/UserLogin";
export default {
  name: "Login",
  components: { UserLogin },
};
</script>
<style scoped>
.login {
  background-image: url("../assets/img/backsite.png");
  background-size: cover;
  height: 100%;
}
</style>

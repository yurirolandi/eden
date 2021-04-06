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
  background-image: url("../assets/img/backsite.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
</style>

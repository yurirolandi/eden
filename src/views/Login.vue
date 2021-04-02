<template>
  <div class="login">
    <div class="container">
      <h1 class="text-center mt-5">login</h1>
      <UserLogin />
    </div>
  </div>
</template>
<script>
import UserLogin from "../components/Login/UserLogin";
export default {
  name: "Login",
  components: { UserLogin },
};
</script>
<style scoped></style>

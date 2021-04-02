<template>
  <div class="login">
    <div class="lighten-5">
      <UserForm />
      <p class="pa-1 mt-3">
        Ao continuar com o acesso, você concorda com a nossa <br />
        política de privacidade
      </p>
    </div>
  </div>
</template>

<script>
import UserForm from "./UserForm";
export default {
  name: "UserLogin",
  components: { UserForm },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
}
</style>

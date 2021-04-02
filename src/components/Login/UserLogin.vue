<template>
  <div class="login">
    <div class="container lighten-5 mt-10">
      <h2 class="mb-2 text-center">Criar conta</h2>
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
.container {
  border-radius: 20px;
  padding: 1.5rem 3rem;
  -webkit-box-shadow: 4px 6px 20px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 6px 20px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 6px 20px -2px rgba(0, 0, 0, 0.75);
}
</style>

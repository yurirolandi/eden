<template>
  <div class="login">
    <div class="container lighten-5 mt-10">
      <h2 class="mb-2 text-center">Entrar</h2>
      <UserForm />

      <div class="mt-8">
        <hr />
        <p class="mt-4">Ainda não sou membro ?</p>
        <v-btn :to="'/create-account'">Cadastrar</v-btn>
      </div>
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
.theme--dark.v-btn--active:hover::before,
.theme--dark.v-btn--active::before {
  opacity: 0;
}
</style>

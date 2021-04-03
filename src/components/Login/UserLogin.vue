<template>
  <div class="login">
    <div class="container lighten-5 mt-10">
      <h2 class="mb-2 text-center titulo">Área Exclusiva</h2>
      <UserForm />

      <div class="mt-10">
        <v-divider></v-divider>
        <p class="mt-6 subtitulo text-center">Ainda não sou membro ?</p>
        <div class="mt-8 auto">
          <v-btn :to="'/create-account'" class="btn">Candidatar-se</v-btn>
        </div>
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
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 414px) {
  .login {
   padding: 5rem 0;
  }
}

.subtitulo {
  font-family: elementary;
}
.container {
  border-radius: 20px;
  padding: 1.5rem 3rem;
  
  max-width: 60vh;
  background: white;
  flex-direction: column;
  justify-content: center;
  display: flex;
  -webkit-box-shadow: 4px 6px 20px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 6px 20px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 6px 20px -2px rgba(0, 0, 0, 0.75);
}
.theme--dark.v-btn--active:hover::before,
.theme--dark.v-btn--active::before {
  opacity: 0;
}

.mt-8.auto {
  display: flex;
  justify-content: center;
}
</style>

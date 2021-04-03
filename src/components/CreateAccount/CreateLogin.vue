<template>
  <div class="create-account">
    <div class="container lighten-5">
      <h2 class="mb-2 text-center titulo">Formulário do Candidato</h2>
      <CreateForm />
    </div>
  </div>
</template>

<script>
import CreateForm from "./CreateForm.vue";
export default {
  name: "CreateLogin",
  components: { CreateForm },
};
</script>

<style scoped>
.create-account {
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 8rem 0;
}
.container {
  border-radius: 20px;
  padding: 1.5rem 3rem;
  height: 100%;
  max-width: 70vw;
  background: white;
  -webkit-box-shadow: 4px 6px 20px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 6px 20px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 6px 20px -2px rgba(0, 0, 0, 0.75);
}

@media only screen and (max-width: 414px) {
  .container {
    max-width: 100%;
    padding: 2rem 1.5rem;
  }
}
@media only screen and (max-width: 414px) {
  .create-account {
    padding: 5rem 0;
  }
}
.titulo {
  letter-spacing: 3px;
}
</style>

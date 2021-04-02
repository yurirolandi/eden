<template>
  <div class="create-account">
    <div class="container mt-10">
      <h2 class="mb-2 text-center">Criar conta</h2>
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
.container {
  border-radius: 20px;
  padding: 1.5rem 3rem;
  -webkit-box-shadow: 4px 6px 20px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 6px 20px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 6px 20px -2px rgba(0, 0, 0, 0.75);
}
</style>

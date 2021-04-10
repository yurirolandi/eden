<template>
  <div class="notfound">
    <div class="container">
      <v-img
        max-width="650"
        position="center center"
        src="../assets/img/404.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
  }),
};
</script>
<style scoped>
.notfound {
  background-color: black;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
</style>
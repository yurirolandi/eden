<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="id"
      :rules="idRules"
      :counter="10"
      label="Login"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :counter="10"
      :rules="passwordRules"
      :type="show ? 'text' : 'password'"
      label="Senha"
      @click:append="show = !show"
      required
    ></v-text-field>

    <div class="auto">
      <v-btn :disabled="!valid" class="mt-3 btn" @click="validate">
        Entrar
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      show: false,
      password: "",
      passwordRules: [
        (v) => !!v || "A senha é obrigatorio!!!",
        (v) => (v && v.length <= 10) || "Senha deve ter 10 caracter",
      ],
      id: "",
      idRules: [
        (v) => !!v || "Id é obrigatorio!!!",
        (v) => (v && v.length <= 10) || "Id deve ter 10 caracter",
        // (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log("tudo certo!!!");
      this.password = "";
      this.id = "";
    },
  },
};
</script>

<style scoped>
.auto {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
</style>

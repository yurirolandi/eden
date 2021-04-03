<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" label="Name" required></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="telefone"
      :rules="telefoneRules"
      :counter="11"
      label="Telefone"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="sexo"
      :rules="[(v) => !!v || 'Campo obrigatório!!!']"
      label="Sexo"
      required
    ></v-select>

    <v-select
      v-model="selectReligiao"
      :items="religiao"
      :rules="[(v) => !!v || 'Campo obrigatório!!!']"
      label="Religiao"
      required
    ></v-select>

    <v-textarea
      outlined
      name="input-7-4"
      label="O que é Religião"
      :rules="religiaoRules"
      v-model="religiaoOquee"
      :counter="200"
      required
    ></v-textarea>

    <v-checkbox
      v-model="checkbox"
      :rules="[
        (v) =>
          !!v || 'Para continuar você precisa aceitar os termos da escola!',
      ]"
      label="Aceitar os termos?"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" class="mr-4 btn" @click="validate">
      Enviar
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    email: "",
    telefone: "",
    religiaoOquee: "",
    emailRules: [
      (v) => !!v || "E-mail é obrigatório!!!",
      (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
    ],
    telefoneRules: [
      (n) => !!n || "Numero de telefone obrigatório!!!",
      (n) =>
        (n && n.length <= 11) ||
        "Numero deve conter 11 digitos incluindo o ddd",
    ],
    religiaoRules: [
      (n) => !!n || "Texto obrigatório!!!",
      (n) => (n && n.length <= 200) || "Texto deve conter 200 digitos",
    ],
    select: null,
    selectReligiao: null,
    sexo: ["Masculino", "Feminino", "Prefiro não dizer"],
    religiao: ["A", "B", "C"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

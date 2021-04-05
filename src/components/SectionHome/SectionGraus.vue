<template>
  <div class="section-grau">
    <div class="section">
      <div class="section__bloco mr-8">
        <h1 class="titulo mb-5">História</h1>
        <div class="bloco__texto">
          <p class="text-justify paragrafo">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.There are many variations of passages
            of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of
            Lorem Ipsum, you need to be sure there isn't anything embarrassing
            hidden in the middle of text.
          </p>
        </div>
      </div>
      <div class="section__bloco">
        <ColumGrau />
      </div>
    </div>
  </div>
</template>

<script>
import ColumGrau from "../DashboardHome/DashboardHome";
export default {
  name: "SectionGrau",
  components: { ColumGrau },
};
</script>

<style scoped>
.section-grau {
  width: 100%;
  margin: 6rem 0rem;
  display: flex;
  align-content: center;
}
.titulo {
  color: #d4aa06;
}
.paragrafo {
  color: white;
  font-size: 1rem;
  letter-spacing: 2px;
}

.section {
  flex-direction: column;
}

.section__bloco {
  width: 100%;
}

.bloco__texto {
  max-width: 100%;
}

@media only screen and (max-width: 414px) {
  .section__bloco {
    width: 97%;
  }
}
</style>

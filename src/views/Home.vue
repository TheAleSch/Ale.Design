<template>
  <div class="home">
    <pagheader />
    <div class="main-grid">
      <div class="title-huge"><h2>Work</h2></div>
      <div class="projects">
        <projectCard
          picture="financialapp.png"
          projectRoute="/project"
          title="Finance Super App"
          desc="A finance Super App designed to help the majority of the company to solve their financial problems in just one place."
          color="#233D6B"
        />
        <projectCard
          picture="dribbblecover-nobg.png"
          external-link="https://dribbble.com/alexandreschrammel"
          title="See more work at Dribbble"
          desc="You can see more of my work at my Dribbble"
          color="#ea4c89"
        />

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import pagheader from "@/components/pagheader.vue";
import projectCard from "@/components/projectcard.vue";

export default {
  name: "Home",
  components: {
    pagheader,
    projectCard,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.main-grid {
  margin: 0 auto;
  display: grid;
  row-gap: 64px;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "title-work title-work title-work"
    "projects projects projects"
    "footer footer footer";
  @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
    row-gap: 24px;
  }
}

.title-huge {
  grid-area: title-work;
  h2 {
    font-weight: 500;
    font-size: 240px;
    line-height: 140%;
    margin-left: 80px;
    @media only screen and (max-width: $breakpoint-phone) {
      font-size: 80px;
      margin-left: 24px;
    }
  }
}

.projects {
  grid-area: projects;
}

</style>
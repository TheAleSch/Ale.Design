<template>
  <div class="home">
    <pagheader />
    <div class="main-grid">
      <div class="title-huge"><h2>Work</h2></div>
      <div class="projects">
        <projectCard
          picture="@/assets/works/financialapp.png"
          projectRoute="/project"
          title="Financial SuperApp"
          desc="The solution we found was to connect all the services in one place, with one login, making it easier to manage the financial life of a company. In order to make this vision of a financial super app become a reality."
          color="#233D6B"
        />
      </div>
    </div>
    <footer>
      <p>Made with ❤ in São Paulo ~ Proudly coded by me ^^ using VueJS</p>
    </footer>
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
    margin-left: -32px;
    @media only screen and (max-width: $breakpoint-phone) {
      font-size: 80px;
      margin-left: -8px;
    }
  }
}

.projects {
  grid-area: projects;
}
footer {
  background-color: #000;
  height: 80px;

  grid-area: footer;

  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    font-weight: 500;
    font-size: 16px;
  }
}
</style>
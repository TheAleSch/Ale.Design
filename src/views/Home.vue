<template>
  <div class="home">
    <pagheader />
    <div class="title-huge"><h2>Work</h2></div>
    <projectCard  picture="" title="Finance SuperApp" desc="The solution we found was to connect all the services in one place, with one login, making it easier to manage the financial life of a company. In order to make this vision of a financial super app become a reality." color="#233D6B"/>
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
.title-huge {
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
</style>
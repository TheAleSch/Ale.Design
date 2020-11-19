<template>
  <div class="home">
    <pagheader />
    <div class="title-huge"><h2>Work</h2></div>
  </div>
</template>

<script>
// @ is an alias to /src
import pagheader from "@/components/pagheader.vue";
export default {
  name: "Home",
  components: {
    pagheader,
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
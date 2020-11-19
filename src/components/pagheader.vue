<template>
  <div class="hello">
    <header class="bg-cube">
      <span class="huge">Hi</span>
      <span class="big">I’m Alexandre Schrammel</span>
      <span class="small">a Designer based in São Paulo</span>
            <div class="social flex right pad-top-1x">
        <a href="https://www.dribbble.com/alexandreschrammel"
          ><img class="" src="../assets/social/dribbble.svg"
        /></a>
        <a href="https://www.linkedin.com/in/alexandreschrammel/"
          ><img class="" src="../assets/social/linkedin.svg"
        /></a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "pagheader",
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "@/scss/variables.scss";


header {
  margin-bottom: 16px;
  min-height: 64vh;
  color: white;

  padding: 0 5vw 5vh 80px;
  width: 100vw;
  background-color: #000;

  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-start;
  @media only screen and (max-width: $breakpoint-phone) {
    padding: 0 24px 8px 24px;
  }
  @media only screen 
  and (min-device-width: $breakpoint-tablet-portrait) 
  and (max-device-width: $breakpoint-tablet-landscape){
    padding: 0 24px 56px 32px;
}
}
.social {
  width: 100%;
    @media only screen and (max-width: $breakpoint-phone) {
    padding: 24px 0 0 0;
  }
  img {
    padding-right: 16px;
    &:last-child {
      padding-right: 8px;
    }
  }
}

.huge {
  margin-left: -20px;
  font-size: 350px;
  line-height: 105%;
  font-weight: 500;

  margin-bottom: 16px;
    @media only screen and (max-width: $breakpoint-phone) {
      font-size: 60vw;
	}
@media only screen 
  and (min-device-width: $breakpoint-tablet-portrait) 
  and (max-device-width: $breakpoint-tablet-landscape){
    font-size: 250px;
}
}
.big {
  font-size: 72px;
  line-height: 120%;
  margin-bottom: 16px;
  @media only screen and (max-width: $breakpoint-phone) {
      font-size: 8vw;
      
  }
  @media only screen 
  and (min-device-width: $breakpoint-tablet-portrait) 
  and (max-device-width: $breakpoint-tablet-landscape){
          font-size: 40px;
}
}

.small {
  font-size: 32px;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 100%;
    @media only screen and (max-width: $breakpoint-phone) {
      font-size: 16px;

	}
  @media only screen 
  and (min-device-width: $breakpoint-tablet-portrait) 
  and (max-device-width: $breakpoint-tablet-landscape){
          font-size: 18px;
}

}
</style>
<template>
  <div class="about">
    <div class="header-content">
      <div class="profile flex">
        <div class="h-fit">
          <img class="img-single" src="../assets/about/me.png" />
        </div>
      </div>
      <div class="bio flex">
        <h2>Alexandre Schrammel</h2>
        <p class="pad-top-1x">
          I’m a passionate interface and experience designer from Brazil,
          curious by nature and that is what I think makes me go beyond to
          achieve the most results in the products that I work on.
        </p>
      </div>
      <div class="social">
        <a href="https://www.dribbble.com/alexandreschrammel" target="_blank">
        <img class="" src="../assets/social/dribbble.svg"
        /></a>
        <a
          href="https://www.linkedin.com/in/alexandreschrammel/"
          target="_blank">
          <img class="" src="../assets/social/linkedin.svg"
        /></a>
      </div>
      <div class="right contact flex">
        <p>
          <span class="title">Contact</span> <span>+ 55 61 98334-0396</span>
          <span>alexandre.schrammel@gmail.com</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagheader",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.header-content {
  margin-bottom: 180px;
  color: white;
  width: 100vw;
  background-color: #000;
  column-gap: 80px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2fr 1fr 1fr;

  font-weight: 500;
  @media only screen and (max-width: $breakpoint-phone) {
    font-size: 10vw;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
  }
  @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
    column-gap: 24px;
    grid-template-rows: 2fr 1fr;
  }
}

.profile {
  grid-row: 1/5;
  grid-column: 1/2;
  @media only screen and (max-width: $breakpoint-phone) {
    max-width: 60vw;
  }
}
.bio {
  grid-row: 1/2;
  grid-column: 2/3;
  flex-direction: column;
  justify-content: flex-end;
  @media only screen and (max-width: $breakpoint-phone) {
    justify-content: flex-start;
  }
  h2 {
    font-weight: 500;
    @media only screen and (max-width: $breakpoint-phone) {
      font-size: 8vw;
      padding: 24px 0 16px 0;
    }
    @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
      font-size: 5vw;
    }
  }
  p {
    max-width: 740px;
    font-family: "Jost", sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 160%;

    @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
      max-width: 520px;
      font-size: 16px;
      width: 440px;
      padding-top: 16px;
    }
    @media only screen and (max-width: $breakpoint-phone) {
      font-size: 4vw;
      max-width: 100vw;
      text-align: left;
      padding-top: 0;
    }
  }
}

/* .bio auto size {
        grid-row: 1/2;
      grid-column: 2/3;
      flex-direction: column;
      justify-content: flex-end;
      h2 {
        font-weight: 500;
        font-size: 4.4vw;
        line-height: 140%;
      }
      p {
        max-width: 38vw;
        font-family: "Jost", sans-serif;
        font-size: 1.3vw;
        font-weight: 300;
        line-height: 160%;
      }
} */
.social {
  grid-row: 2/3;
  grid-column: 2/3;
  @media only screen and (max-width: $breakpoint-phone) {
    padding: 8px 0;
  }
  img {
    padding-right: 16px;
  }
}
.contact {
  grid-row: 3/5;
  grid-column: 2/3;
  @media only screen and (max-width: $breakpoint-phone) {
    align-self: flex-start;
    margin-top: 5vh;
  }
  @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
    justify-content: flex-start;
  }

  p {
    line-height: 40px;
    font-family: "jost", sans-serif;
    align-self: flex-end;
    margin-bottom: 32px;
    @media only screen and (max-width: $breakpoint-phone) {
      text-align: left;
      align-self: flex-start;
      font-size: 16px;
      display: block;
    }
    @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
      margin-bottom: 16px;
    }
  }
  .title {
    font-weight: 500;
    font-size: 24px;
    padding-right: 32px;
    display: inline;
    @media only screen and (max-width: $breakpoint-phone) {
      padding-right: 0;
    }
    @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
      display: inline;
      font-size: 20px;
      padding-right: 16px;
    }
  }
  span {
    font-weight: 200;
    font-size: 18px;
    padding-right: 40px;
    display: inline;
    @media only screen and (max-width: $breakpoint-phone) {
      font-size: 16px;
      display: block;
      padding-right: 0x;
    }
    @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
      font-size: 16px;
      padding-right: 16px;
    }
  }
}
</style>
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
          curious by nature and that is what I think makes me go boyond to
          achieve the most results in the products that I work on.
        </p>
      </div>
      <div class="social pad-top-1x">
        <a href="https://www.dribbble.com/alexandreschrammel"
          ><img class="" src="../assets/social/dribbble.svg"
        /></a>
        <a href="https://www.linkedin.com/in/alexandreschrammel/"
          ><img class="" src="../assets/social/linkedin.svg"
        /></a>
      </div>
      <div class="contact flex right">
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
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.header-content {
  margin-bottom: 80px;
  color: white;
  width: 100vw;
  background-color: #000;

  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 80px;
  grid-template-rows: 2fr 1fr 1fr;
}

.profile {
  grid-row: 1/5;
  grid-column: 1/2;
}
.bio {
  grid-row: 1/2;
  grid-column: 2/3;
  flex-direction: column;
  justify-content: flex-end;
  h2 {
    font-weight: 500;
  }
  p {
    max-width: 740px;
    font-family: "Jost", sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 160%;
  }
}

/* .bio {
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
  img {
    padding-right: 16px;
  }
}
.contact {
  grid-row: 3/5;
  grid-column: 2/3;
  p {
    line-height: 40px;
    font-family: "jost", sans-serif;
    align-self: flex-end;
    margin-bottom: 32px;
  }
  .title {
    font-weight: 500;
    font-size: 24px;
    padding-right: 32px;
  }
  span {
    font-weight: 200;
    font-size: 18;
    padding-right: 40px;
  }
}
</style>
<template>
  <div :style="cssVars" class="projectcard">
    <div class="content">
      <h4>{{ title }}</h4>
      <p class="pad-top-1x">{{ desc }}</p>

      <router-link :to="projectRoute">
        See project
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.94534 14.673H21.8387L15.332 8.16637c-.52-.52-.52-1.37333 0-1.89333.2491-.24967.5873-.38998.94-.38998.3527 0 .6909.14031.94.38998l8.7867 8.78666c.52.52.52 1.36 0 1.88l-8.7867 8.7867c-.52.52-1.36.52-1.88 0-.52-.52-.52-1.36 0-1.88l6.5067-6.5067H6.94534c-.73333 0-1.33333-.6-1.33333-1.3333 0-.7334.6-1.3334 1.33333-1.3334z"
            fill="#fff"
          /></svg
      ></router-link>
      <a
        :href="externalLink"
        target="_blank"
        v-if="externalLink && externalLink.length"
      >
        See more
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.94534 14.673H21.8387L15.332 8.16637c-.52-.52-.52-1.37333 0-1.89333.2491-.24967.5873-.38998.94-.38998.3527 0 .6909.14031.94.38998l8.7867 8.78666c.52.52.52 1.36 0 1.88l-8.7867 8.7867c-.52.52-1.36.52-1.88 0-.52-.52-.52-1.36 0-1.88l6.5067-6.5067H6.94534c-.73333 0-1.33333-.6-1.33333-1.3333 0-.7334.6-1.3334 1.33333-1.3334z"
            fill="#fff"
          /></svg
      ></a>
    </div>
    <div class="thumb">
      <img :src="picturePath" />
    </div>
  </div>
</template>

<script>
export default {
  name: "projectCard",
  props: {
    title: String,
    desc: String,
    picture: String,
    color: String,
    projectRoute: String,
    externalLink: String,
  },
  computed: {
    picturePath() {
      return require(`../assets/works/${this.picture}`);
    },
    cssVars() {
      return {
        /* variables you want to pass to css */
        "--bgcolor": this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.projectcard {
  background-color: var(--bgcolor);
  margin: 80px;
  color: white;
  display: flex;
  padding-left: 64px;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 200px;
  @media only screen and (max-width: $breakpoint-phone) {
    max-width: 100vw;
    margin: 24px;
    flex-direction: column;
    padding: 0;
    justify-content: flex-start;
    margin-top: 100px;
    margin-bottom: 152px;
  }
  @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
    max-width: 80vw;
    margin-left: 0;
    justify-content: flex-start;
  }
}

.content {
  width: 580px;
  padding-top: 136px;
  padding-bottom: 56px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: $breakpoint-phone) {
    padding: 24px;
    width: 100%;
    order: 2;
  }
  @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
    padding-top: 48px;
    width: 380px;
  }
}

.thumb {
  align-self: center;
  margin-right: -200px;
  img {
    max-width: 600px;
    @media only screen and (max-width: $breakpoint-phone) {
      max-width: 70vw;
    }
    @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
      max-width: 50vw;
      min-width: 240px;
    }
  }
  @media only screen and (max-width: $breakpoint-phone) {
    transform: none;
    order: 1;
    align-self: center;
    margin-top: -100px;
    margin-right: 0;
  }
}

// Text
h4 {
  justify-self: flex-start;
  font-weight: 400;
}

a {
  color: white;

  font-family: Jost;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 46px;
  text-decoration: none;
  align-self: flex-start;
  justify-self: flex-end;
  padding-top: 88px;
  display: flex;
  align-items: center;
  &:hover > svg {
    animation: move 0.6s infinite alternate;
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    @keyframes move {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(8px);
      }
    }
  }

  svg {
    margin-left: 8px;
    transition: all 0.2s ease-in-out;
  }
  @media only screen and (max-width: $breakpoint-phone) {
    padding-top: 48px;
    align-self: flex-end;
    font-weight: 400;
  }
  @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
    padding-top: 48px;
  }
}
p {
  font-family: Jost;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 160%;
  @media only screen and (max-width: $breakpoint-phone) {
    font-size: 14px;
  }
  @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
    font-size: 18px;
  }
}
</style>
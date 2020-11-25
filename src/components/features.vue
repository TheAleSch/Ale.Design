<template>
  <div class="feature">
    <div v-for="item in featureItems" :key="item.id" class="item">
      <a
        @mouseover="mouseOver"
        @mouseleave="mouseOut"
        :href="item.externalLink"
        target="_blank"
      >
        <h4>{{ item.title }}</h4></a
      >
      <span>{{ item.year }} - {{ item.language }}</span>
    </div>
  </div>
</template>

<script>
import eventbus from "@/eventbus";

export default {
  name: "featureList",
  data: function() {
    return {
      featureItems: [
        {
          id: 1,
          title: "Talk: Product Design Process: How to create great products!",
          year: "2020",
          language: "Portuguese",
          externalLink: "https://youtu.be/d_I-0LPYZ1g",
        },
        {
          id: 2,
          title: "Volunteer at  12ª Bienal Brasileira de Design Gráfico",
          year: "2017",
          language: "Portuguese",
          externalLink: "http://12.bienaladg.org.br/",
        },
        {
          id: 3,
          title: "Volunteer at DiaTipo Brasilía 2017",
          year: "2017",
          language: "Portuguese",
          externalLink: "http://www.diatipo.com.br/df/",
        },
      ],
    };
  },
  methods: {
    mouseOver() {
      eventbus.$emit("mouseOn");
    },
    mouseOut() {
      eventbus.$emit("mouseOff");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.feature {
  display: flex;
  flex-direction: column;

  a {
    color: #000;
    text-decoration: none;
    &:after {
      content: "";
      background-image: url("../../src/assets/icons/trending_flat.svg");
      margin-left: 5px;
      min-width: 24px;
      min-height: 24px;
      position: absolute;
      display: inline-block;
      transform: translateY(+8px);
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    a {
      &:hover {
        color: #ff1e00 !important;
      }
    }
    @media only screen and (max-width: $breakpoint-phone) {
      margin-bottom: 32px;
    }

    h4 {
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      display: inline;
      @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
        font-size: 20px;
      }
      @media only screen and (max-width: $breakpoint-phone) {
        font-size: 20px;
      }
    }
    span {
      margin-top: 8px;
      font-size: 18px;
      line-height: 150%;
      color: #606060;
      @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
        font-size: 16px;
      }
    }
  }
}
</style>

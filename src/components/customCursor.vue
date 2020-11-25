<template>
  <div>
    <!-- slot onde inserimos o mouse  com os bindings expostos para uso do pai-->
    <slot
      v-if="position.X != 0 && position.Y != 0"
      :isSmall="isSmall"
      :position="position"
    />
  </div>
</template>

<script>
import eventbus from "@/eventbus";
export default {
  name: "customCursor",
  data() {
    return {
      // objeto com posição do mouse
      position: {
        X: 0,
        Y: 0,
      },
      // variavel que verifica se o mouse deve mudar

      isSmall: false,
    };
  },
  methods: {
    // metodo para salvar a posicao do mouse em data
    mousePos(event) {
      this.position.X = event.clientX;
      this.position.Y = event.clientY;
      console.log(this.isSmall);
    },
  },
  mounted() {
    // ouve o evento mouseOn e mouseOff
    eventbus.$on("mouseOn", () => (this.isSmall = true));
    eventbus.$on("mouseOff", () => (this.isSmall = false));

    //pega a posicao do mouse toda vez que ele se move
    document.addEventListener("mousemove", this.mousePos);
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.mousePos);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.cursor {
  bottom: 0;
  right: 0;
  position: fixed;
  pointer-events: none;
  @media only screen and (max-width: $breakpoint-phone) {
    display: none;
  }

  @media only screen and (min-device-width: $breakpoint-tablet-portrait) and (max-device-width: $breakpoint-tablet-landscape) {
    display: none;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 899px) and (orientation: landscape) {
    display: none;
  }
}
.cursor--small {
  width: 24px;
  height: 24px;
  left: -8px;
  top: -8px;
  border-radius: 50%;
  z-index: 100000;
  border: rgb(0, 0, 0) 4px solid;
  transition: width 300ms, height 300ms;
  mix-blend-mode: exclusion;
  background-color: #fff;
}

.cursorHover {
  width: 64px;
  height: 64px;
  left: -20px;
  top: -20px;
  border: rgb(0, 0, 0) olid;
}

// .projectcard:hover ~ div .cursor--small {
//   width: 80px;
//   height: 80px;
//   left: -20px;
//   top: -20px;
//   border: rgb(255, 0, 0) 6px solid;
// }
</style>

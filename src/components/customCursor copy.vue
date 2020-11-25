<template>
  <div>
    <slot :position="position" />
  </div>
</template>

<script>
export default {
  name: "customCursor",
  data() {
    return {
      position: {
        X: 0,
        Y: 0,
      },
    };
  },
  methods: {
    mousePos(event) {
      this.position.X = event.clientX;
      this.position.Y = event.clientY;
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.mousePos);
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.mousePos);
  },
};
</script>

<style lang="scss" scoped>
.cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
}
.cursor--small {
  width: 16px;
  height: 16px;
  left: -8px;
  top: -8px;
  border-radius: 50%;
  z-index: 100000;
  border: rgba(0, 0, 0, 1) 4px solid;
  transition: width 300ms, height 300ms;
  mix-blend-mode: exclusion;
  background-color: #fff;
}

.project-box:hover ~ .cursor--small {
  width: 40px;
  height: 40px;
  left: -20px;
  top: -20px;
  border: #000 6px solid;
}
</style>

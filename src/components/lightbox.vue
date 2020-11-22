<template>
    <div  v-on:click="openLightbox" v-bind:class="{ 'lightbox-active': isOpen }" class="lightbox-backdrop">
      <slot/>
          <!-- <button type="button" class="btn-close"  @click="show()" aria-label="Close modal" >
        x 
      </button> -->

    </div>
</template>

<script>
export default {
 data() {
    return {
      isOpen: false,
    }
  },
  methods:{
   openLightbox(){
     this.isOpen = !this.isOpen;
   }
  }
};
  
</script>
<style lang="scss" scoped>
.lightbox-backdrop {
cursor: zoom-in;
}
.lightbox-active {
  backdrop-filter: blur(16px);
  z-index: 9999;
  cursor: zoom-out;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 9, 34, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  

  img {
    background: #ffffff;
    max-width: 90vw;
    max-height: 90vh;
          border: 8px solid #fff;

  }
  .btn-close {
    border: none;
    font-size: 40px;
    padding: 20px;
    align-self: flex-start;
    cursor: pointer;
    font-weight: bold;
    color: white;
    background-color: black;
    margin: 8px;
  }
}


</style>
<style lang="scss" >


.lightbox-active {
  img, svg {
          border: 16px solid #fff;
          background-color: white;
          border-radius: 2px;
  }
}
.lightbox-enter,
.lightbox-leave-active {
  opacity: 2;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: all 2s ease;
}
</style>

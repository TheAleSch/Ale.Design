<template>
  <div class="home">
  <pagheader />
  <div class="title-huge"><h2>Work</h2></div>
  </div>
</template>

<script>
// @ is an alias to /src
import pagheader from '@/components/pagheader.vue'
export default {
  name: 'Home',
  components: {
    pagheader,
   
  }
}
</script>

<style lang="scss" scoped>

.title-huge {
  h2{
font-weight: 500;
font-size: 240px;
line-height: 100%px;
margin-left: -32px;
}
}
</style>
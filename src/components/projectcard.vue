<template>
  <div :style="cssVars" class="projectcard">
    <div class="content">
    <h4>{{ title }}</h4>
    <p>{{ desc }}</p>
    <a href="">See project 
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.94534 14.673H21.8387L15.332 8.16637c-.52-.52-.52-1.37333 0-1.89333.2491-.24967.5873-.38998.94-.38998.3527 0 .6909.14031.94.38998l8.7867 8.78666c.52.52.52 1.36 0 1.88l-8.7867 8.7867c-.52.52-1.36.52-1.88 0-.52-.52-.52-1.36 0-1.88l6.5067-6.5067H6.94534c-.73333 0-1.33333-.6-1.33333-1.3333 0-.7334.6-1.3334 1.33333-1.3334z" fill="#fff"/>
</svg></a>

      
    </div>
    <div class="thumb"><img class="" src="@/assets/works/financialapp.png" /></div>
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
  },
    computed: {
      cssVars () {
        return{
          /* variables you want to pass to css */
          '--bgcolor': this.color,
        }
    }
}
};
</script>

<style lang="scss" scoped>
.projectcard {
  background-color: var(--bgcolor);
  margin: 80px;
  color: white;
}

img{

}

// Text
h4 {
  font-family: Jost;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 58px;
}

a {
  color: white;
  
font-family: Jost;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 46px;
text-decoration: none;
}

</style>
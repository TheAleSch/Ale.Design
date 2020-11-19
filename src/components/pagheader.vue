<template>
  <div class="hello">
  <header class="bg-cube">
    <span class="huge">Hi</span>
    <span class="big">I’m Alexandre Schrammel</span>
    <span class="small">a Designer based in São Paulo</span>
        <!-- Cursor -->

</header>

  </div>
</template>

<script>
export default {
  name: 'pagheader',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

header{
  margin-bottom: 16px;
  min-height: 70vh;
  color: white;

	padding: 0 15vw 8vh 80px;
	width: 100vw;
	height: 60vh;
	background-color: #000;

	display: flex;
	flex-flow: column;
	justify-content: flex-end;
	align-items: flex-start;
}
.huge {
  margin-left: -20px;
  font-size: 350px;
  line-height: 105%;
  font-weight: 500;
	
	margin-bottom:16px;
}
.big {
	font-size: 72px;
	line-height: 80px;
	margin-bottom:16px;
}

.small {
	font-size: 32px;
	font-weight:300;
	text-transform: uppercase;
	line-height:32px;
}
</style>
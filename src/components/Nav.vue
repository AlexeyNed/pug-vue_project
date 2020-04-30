<template lang="pug">
    .hero
      router-link(to="/" tag="div")
        h1 {{ msg }}
</template>

<script>
	export default {
		name: "Nav",
    data(){
      return{
        msg: "AppTodo",
      }
    }
	}
</script>

<style lang="scss" scoped>
.hero{
    h1 {
    cursor: pointer;
    padding: 20px 50px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
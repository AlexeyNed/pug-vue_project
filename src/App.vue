<template lang="pug">
  #app
    n-nav
    router-view
</template>

<script>
  import Nav from './components/Nav.vue';
  export default {
    data(){
      return{
        msg: "AppTodo",
      };
    },
    components:{
      "n-nav": Nav
    }
  };
</script>

<style lang="scss" scoped>
</style>
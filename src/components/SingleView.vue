<template lang="pug">
  .container(:class="[mobile]")
    router-link(to="/" tag="p").title
      button.back < back
    p.title {{ user.name }}
    ul.table
      li(v-for="todo in todos")
        p(v-if="todo.completed === false") {{ todo.title }}
        del(v-else) {{ todo.title }}
</template>

<script>
  import axios from 'axios';
	export default {
		name: "SingleView",
    data(){
		  return{
        windowWidth: 0,
		    pageId: this.$route.params.id,
        pageSize: this.$route.params.pageSize,
        urlUser: 'https://jsonplaceholder.typicode.com/users/',
        urlTodos: 'https://jsonplaceholder.typicode.com/todos?userId=',
        user: {},
        todos: {},
      }
    },

    methods:{
      getUser(){
       axios.get(this.urlUser + this.pageId)
         .then (res => {
              this.user = res.data
          }) 
      },

      getTodos(){
        axios.get(this.urlTodos + this.pageId)
         .then (res => {
              this.todos = res.data
          }) 
      },
      getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
      },
    },
    computed:{
      mobile() {
        return {
           mobile: this.windowWidth < 400
        }
      },
    },
    created(){
      this.$nextTick(()=> {
          window.addEventListener('resize', this.getWindowWidth);
          this.getWindowWidth()
      })

     this.getUser()
     this.getTodos()
    },
	}
</script>

<style lang="scss" scoped>
  .container{
    margin: 0 80px;
     &.mobile{
       font-size: 12px;
       margin: 0;
     }
     .title{
       font-size:25px;
       padding-left: 25px;
     }
     .back{
       cursor: pointer;
       background: #ccc;
       border: none;
       padding: 10px 20px;
       text-transform: uppercase;
       border-radius: 5px;
     } 
     .table{
        li{
          list-style-type: decimal;
          margin-bottom: 7px;
          p{
            margin: 0;
          }
        }
     }
 }
</style>
<template lang="pug">
  .container(:class="[mobile]")
    .table
      .table__header
        p name
        p email
        p phone
      .table__body
          router-link(v-for="(user, index) in users" :key="user.id" :to="'/user/' + user.id" tag="div").table__row
            .table__name {{ user.name }}
            .table__email {{ user.email }}
            .table__phone {{ user.phone }}
    .pg
      n-pg(:page="page" :limit="limit" @page:update="updatePage")
</template>

<script>
  import axios from 'axios';
  import Pagination from './Pagination.vue';
	export default {
		name: "List",
    data(){
		  return{
        windowWidth: 0,
        users: [],
        limit: 5,
        page: 1,
        URL: 'https://jsonplaceholder.typicode.com/users',
      }
    },

    components:{
      "n-pg": Pagination,
    },

    methods:{

     updatePage(pageNumber) {
       this.page = pageNumber;
        localStorage.setItem("page", JSON.stringify(this.page))
       this.getUsers;
     },
     getWindowWidth(event) {
         this.windowWidth = document.documentElement.clientWidth;
     },
    },

    computed:{
      getUsers(){
        let data = {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        }
        axios.get(this.URL, data)
          .then (res => {
               this.users = res.data
          });
      },
      mobile() {
        return {
           mobile: this.windowWidth < 400
        }
      },
    },

    created(){
      if(window.localStorage.getItem("page")){
        this.page = JSON.parse(window.localStorage.getItem("page"))
      }
      this.getUsers;

      this.$nextTick(()=> {
          window.addEventListener('resize', this.getWindowWidth);
          this.getWindowWidth()
      })
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth);
    }
	}
</script>

<style lang="scss" scoped>
  .container{
    box-shadow: 0 4px 20px rgba(0,0,0,0.18);
    margin: 0 80px;
    &.mobile{
      font-size: 12px;
      margin: 0;
    }
    .table{
      .table__header{
            display: flex;
            background-color: #b8b8eb;
            font-size: 15px;
            text-transform: uppercase;
            min-height: 50px;
          & p {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
      }

      .table__row{
          display: flex;
          align-items: center;
          min-height: 50px;
          cursor: pointer;
          transition: .3s;

          .table__name,
          .table__email,
          .table__phone{
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          &:nth-child(2n){
            background-color: #eeeef9;
          }
          &:hover{
            background-color: #8f8fdf;
          }
      }
    }
    .pg{
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }  
</style>

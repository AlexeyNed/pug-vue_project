<template lang="pug">
  .pagination-wrapper(v-if="total > 0")
    button(@click="updatePage(page - 1)" :disabled="page === 1") < 
    p {{ page }} из {{ total }}
    button(@click="updatePage(page + 1)" :disabled="page === total") > 
</template>

<script>
  import axios from 'axios';
  export default {
      name: 'pagination',
      props: ['page', 'limit'],
      data(){
          return{
            URL: 'https://jsonplaceholder.typicode.com/users',
            total: '',
          }
      },

      methods: {
          updatePage(pageNumber) {
            this.$emit('page:update', pageNumber);
          },

          totalPages() {
             axios.get(this.URL)
             .then (res => {
                   this.total = res.data.length / this.limit
             });
          },
      },

      created(){        
        this.totalPages();
      }
  }
</script>

<style lang="scss" scoped>
  .pagination-wrapper{
    border-top: 1px solid #ccc;
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  button{
    cursor: pointer;
    background: none;
    border: none;
    }
  }
</style>

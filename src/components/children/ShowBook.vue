<template>
  <div>
    <div class="header">
      <router-link to="/" class="link1">Home</router-link>
      <div><router-link to="/list-page" class="link1">На главную</router-link></div>
    </div>
    <div>
      <p>{{newBook.title}}</p>
      <p>{{newBook.author}}</p>
      <p>{{newBook.page}}</p>
      <p>{{newBook.price}}</p>
      <p>{{newBook.genre}}</p>
      <p>{{newBook.description}}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "ShowBook",
  props:{
    currentBook: {
      type: Object,
      required: true,
    },
  },

  data(){
    return {
      newBook: {
        title: '',
        author: '',
        page: '',
        image: null,
        price: '',
        genre: '',
        description: '',
      },
    }
  },
  mounted() {
    this.newBook.title = this.currentBook.title
    this.newBook.author = this.currentBook.author
    this.newBook.page = this.currentBook.page
    this.newBook.price = this.currentBook.price
    this.newBook.genre = this.currentBook.genre
    this.newBook.description = this.currentBook.description
    this.newBook.image = this.currentBook.image
   console.log(this.currentBook.id);
  }


}
</script>

<style scoped>

</style>
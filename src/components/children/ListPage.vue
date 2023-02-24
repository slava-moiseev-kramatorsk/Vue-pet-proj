<template>
  <div>
    <div class="header">
      <router-link to="/" class="link1">Home</router-link>
      <div><router-link to="/new-book" class="link1">Добавить</router-link></div>
    </div>
    <div >
      <input  id="searching" class="inputSearch" name="findBook" placeholder="Поиск" v-focus>
<!--      <el-input name="title" placeholder="Ведите название" v-focus></el-input>-->
    </div>

    <div v-for="book in allBooks" :key="book.id" class="book">
      <div class="titleBook">Название: {{book.title}}</div>
      <div>Жанр: {{book.genre}}</div>
      <div>Автор: {{book.author}}</div>
      <div>Страниц: {{book.page}}</div>
      <div>Цена: {{book.price}}</div>
      <div>Краткое описание: {{book.description}}</div>
      <div>
      <el-button
          class="btn"
          type="danger"
          plain
          @click="deleteItem(book)"
      >Удалить</el-button>
      <el-button
          class="btn"
          type="primary"
          plain
          @click="updateBook(book)"
      >Редактировать</el-button>
        <el-button
            class="btn"
            type="primary"
            plain
            @click="viewBook(book)"
        >Просмотр</el-button>
      </div>
<!--      <router-link :to="{name: 'editBook', params: { book: book, id: book.id }}"  class="link1">Edit</router-link>-->
      <hr>
    </div>
  </div>
</template>

<script>

// import axios from "axios";
import {mapActions, mapGetters} from "vuex";
import router from "@/router";
import ShowBook from "@/components/children/ShowBook";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {ShowBook},
  data() {
    return {
    }
  },
  name: 'ListPage',

  computed: {
    ...mapGetters(['allBooks']),
  },

  methods: {
    ...mapActions(['getAllBooks','deleteBook', 'getTest']),
    updateBook(book){
router.push({name: 'editBook', params: { currentBook: book, id: book.id }})
    },
    deleteItem(book){
      this.deleteBook(book);
      console.log(book.id)
    },
    viewBook(book){
      router.push({name: 'showBook', params: { currentBook: book, id: book.id }})
    },
  },

  mounted() {
    this.getAllBooks();
    this.getTest();
  }

}
</script>

<style>

.header{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-items: left;
  align-items: center;
  width: auto;
  height: 70px;
  background-color: steelblue;
}
.link1{
  text-decoration: none;
  color: aliceblue;
  font-size: 25px;
  font-family: fantasy, sans-serif;
}
.book{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
}
.titleBook{
  font-size: 30px;
  font-family: sans-serif;
}
.inputSearch{
  margin: 15px;
  width: 300px;
  height: 20px;
}
</style>
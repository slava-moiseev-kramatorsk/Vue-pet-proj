<template>
  <div>
    <div class="header">
      <div><router-link to="/" class="link1">Home</router-link></div>
      <div><router-link to="/list-page" class="link1">Весь список</router-link></div>
    </div>
    <div class="main-div">

      <form class="form">
        <el-input placeholder="Ведите название" v-model="newBook.title" ></el-input>
        <label class="label">Ведите название</label>
        <GenresBook
            :genre="newBook.genre"
            @choiceGenre="optionSelect"
        />
        <label class="label">Ведите жанр</label>
        <el-input placeholder="Ведите имя автора" v-model="newBook.author"></el-input>
        <label class="label">Ведите имя автора</label>
        <el-input placeholder="Ведите количество страниц" v-model="newBook.page"></el-input>
        <label class="label">Ведите количество страниц</label>
        <el-input type="number" placeholder="Цена" v-model="newBook.price"></el-input>
        <label class="label">Цена</label>
        <el-input
            type="textarea"
            :rows="3"
            placeholder="Краткое описание"
            v-model="newBook.description"
        /><label class="label">Краткое описание</label>
        <el-button type="primary" @click="uploadImage">Загрузить<i class="el-icon-upload el-icon-right" ></i></el-button>
        <input
            type="file"
            accept="images/*"
            ref="fileInput"
            style="display: none"
            @change="onFileChange"
        >
        <label class="label">Добавить изображение обложки</label>

        <el-button
            class="btn"
            type="primary"
            plain
            @click="updateBook"
        >Сохранить</el-button>
      </form>
    </div>
    <div>{{books.id}}</div>
  </div>

</template>


<script>
import {mapActions , mapGetters} from 'vuex'
import GenresBook from "@/components/children/GenresBook";




export default {
  name: 'EditBook',
  components: {GenresBook},
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
      clearBook: {
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

  computed: {
    ...mapGetters(['allBooks', 'selected']),

    books(){
      return this.allBooks
    },
  },

  methods:{
    ...mapActions(['updateBooks']),
    updateBook(){
      this.updateBooks( {
        id: this.currentBook.id,
        values: this.newBook,
      })
      console.log(this.newBook)
      this.newBook = this.clearBook;
      // this.clearForm()
      // console.log(this.currentBook.id)

    },

    optionSelect(value){
      this.newBook.genre = value
    },

    uploadImage(){
      // this.$refs.fileInput.click()
    },

    onFileChange(event){
      // const file = event.target.files[0];
      //
      // const reader = new FileReader();
      // reader.onload = () => {
      //   this.imageSrc = reader.result
      // }
      // reader.readAsDataURL(file)
      // this.image = file

      console.log(event);

    },

    clearForm(){
        this.newBook.title = '';
        this.newBook.author = '';
        this.newBook.page = '';
        this.newBook.image = null;
        this.newBook.price = '';
        this.newBook.genre = '';
        this.newBook.description = '';
    },
  },

  // watch: {
  //   currentBook: {
  //     handler(val) {
  //       if (val){
  //         this.newBook = this.currentBook;
  //       }
  //       else
  //       {
  //         this.newBook = this.clearBook;
  //       }
  //     },
  //     deep: true,
  //   },
  // },

  created(){
    this.newBook = this.currentBook;
  },
}


</script>

<style scoped>
.btn{
  width: auto;
}
.main-div{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;

}
.label{
  text-align: left;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 15px;
}
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
</style>
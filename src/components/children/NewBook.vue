<template>
<div>
        <div class="header">
          <div><router-link to="/" class="link1">Home</router-link></div>
          <div><router-link to="/list-page" class="link1">Весь список</router-link></div>
        </div>
       <div class="main-div">

         <form class="form">
           <el-input name="title" placeholder="Ведите название" v-model="title"></el-input>
           <label class="label">Ведите название</label>
           <GenresBook
               name="genre"
               genre=""
               @choiceGenre="optionSelect"
           />
           <label class="label">Ведите жанр</label>
           <el-input name="author" placeholder="Ведите имя автора" v-model="author"></el-input>
           <label class="label">Ведите имя автора</label>
           <el-input name="page" placeholder="Ведите количество страниц" v-model="page"></el-input>
           <label class="label">Ведите количество страниц</label>
           <el-input name="price" type="number" placeholder="Цена" v-model="price"></el-input>
           <label class="label">Цена</label>
           <el-input
               name="description"
               type="textarea"
               :rows="3"
               placeholder="Краткое описание"
               v-model="description"
           /><label class="label">Краткое описание</label>
           <el-button type="primary" @click="uploadImage">Загрузить<i class="el-icon-upload el-icon-right" ></i></el-button>
           <input
               name="image"
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
             @click="submit"
           >Сохранить</el-button>
         </form>
       </div>
</div>
</template>


<script>
import {mapActions , mapGetters} from 'vuex'
import GenresBook from "@/components/children/GenresBook";
import router from "@/router";




export default {
  components: {GenresBook},
  props:[
  ],
  data(){
    return {
      id: '',
      title: '',
      author: '',
      page: '',
      image: null,
      imageSrc:'',
      price: '',
      genre:'',
      description: '',

      }

  },
  computed: {
    ...mapGetters(['allBooks', 'selected']),

    books(){
      return this.allBooks
    },

  },
  methods:{
    ...mapActions(['createNewBook']),
    submit(){
      this.createNewBook({
        title: this.title,
        genre: this.genre,
        author: this.author,
        page: this.page,
        image: this.image,
        price: this.price,
        description: this.description,
      });
      this.clearForm();
      router.push({name: 'listPage'});

    },

    optionSelect(value){
      this.genre = value
      console.log(this.genre)
    },
    uploadImage(){
      this.$refs.fileInput.click()
    },
    onFileChange(event){
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    },

    clearForm(){
          this.title = ''
          this.author = ''
          this.page = ''
          this.price = ''
          this.description = ''
    },
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
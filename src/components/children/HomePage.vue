<template>
  <div class="home-page">
    <div class="header">
      <div><router-link to="/list-page" class="link1">Весь список</router-link></div>
      <div><router-link to="/new-book" class="link1">Добавить</router-link></div>
      <div><router-link to="/login-page" class="link1">Войти</router-link></div>
<!--      <div><<router-link to="/new-book" class="link1">Регистрация</router-link>></div>-->
    </div>
      <div class="log">
        <login-page></login-page>
      </div>
    <el-button
        class="btn"
        type="primary"
        plain
        @click="logOut"
    >Выйти</el-button>

  </div>
</template>

<script>



import {mapActions, mapGetters} from 'vuex'

import  LoginPage from '@/components/children/Login'
import router from "@/router";


export default {
  name: 'HomePage',
  components: {LoginPage},
  computed:{
    ...mapGetters("auth", ["user","apiToken"]),
  },
  methods:{
    ...mapActions(['updateBooks']),
    ...mapActions("auth",['sendLogoutRequest','getUserData']),
    logOut(){
        this.sendLogoutRequest();
        router.push('/')
    },
  },
  created() {},
  mounted() {
    if (localStorage.getItem("authToken")) {
      this.getUserData(this.apiToken);
    }
  },
  delete(){}
}

</script>


<style lang="scss">

.home-page{
  height: 100vh;
  width: 100vw;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;

  .content{
    font-size: 40px;
    color: #00f;
  }

  .btn{
    height: 40px;

    margin-top: 20px;

    &.btn-first{

    }
    &.btn-second{
      margin-top: 30px;
    }
  }
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
.log{
  display: flex;
  justify-content: center;
  justify-items: center;
}
</style>

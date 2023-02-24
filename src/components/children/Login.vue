<template>

    <div class="form">
      <el-input  placeholder="email" v-model="email" ></el-input>
<!--      <input v-model="email" type="email" placeholder="email" >-->
      <el-input placeholder="password" v-model="password" type="password"></el-input>
<!--      <input v-model="password" type="password" placeholder="password" class="form-control">-->
<!--      <input @click.prevent="login" type="submit" value="Login" class="btn btn-primary">-->
      <el-button
          class="btn"
          type="primary"
          plain
          @click.prevent="login"
      >Войти</el-button>
      <div v-if="user">
        <span class="text-decoration-underline fw-bold"> Hello {{ user.name }}</span>
<!--        <span @click="logout" class="logout text-decoration-underline fw-bold">Log out</span>-->
      </div>
    </div>


</template>

<script>
// import axios from "axios";
import {mapActions, mapMutations,mapGetters} from "vuex";


export default {
  data() {
    return {
        email: '',
        password: '',
    }
  },
  name: "LoginPage",

  methods: {
    ...mapActions("auth", ['sendLoginRequest', 'getUserData']),
    ...mapMutations("auth",['setErrors']),
    async login() {
        await this.sendLoginRequest({email: this.email, password: this.password});

      // axios.get('http://example.palmo/sanctum/csrf-cookie')
      //     .then(response => {
      //       axios.post('http://example.palmo/login', {email: this.email, password: this.password})
      //           .then(r =>{
      //             console.log(r);
      //             console.log(response);
      //             console.log(this.$data)
      //           })
      //           .catch(err =>{
      //             console.log(err)
      //           })
      //     })
    },
  },
  mounted() {
    if (localStorage.getItem("authToken")) {
      this.getUserData(this.apiToken);
    }
  },
  computed: {
    ...mapGetters("auth", ["user","apiToken"]),
  },
}

</script>

<style scoped>
.form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  margin: 15px;
}

</style>
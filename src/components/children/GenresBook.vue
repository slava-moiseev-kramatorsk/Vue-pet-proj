<template>
  <el-select v-model="value" placeholder="Жанр" >
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        @click="selectOptions"
    >

    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'GenresBook',
  props:{
    genre: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      options: [{
        value: 'Приключения',
        label: 'Приключения'
      }, {
        value: 'Ужасы',
        label: 'Ужасы'
      }, {
        value: 'Детская литература',
        label: 'Детская литература'
      }, {
        value: 'Научная литература',
        label: 'Научная литература'
      }, {
        value: 'Фантастика',
        label: 'Фантастика'
      }],
      value: '',
    }
  },
  watch: {
    value(){
      this.$emit('choiceGenre', this.value)
    },
    genre(){
      this.value = this.genre;
    }
  },

  methods:{
    selectOptions(){
      this.$emit('choiceGenre', this.value)
    }
  },
  created() {
    this.value = this.genre;
  }
}
</script>
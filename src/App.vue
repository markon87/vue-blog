<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import header from './components/header.vue'


export default {
  components:{
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'app-header': header
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
}
html { font-size: 62.5%;}
body{
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
}
h1{
  font-size: 3.2rem;
  color: #35495e;
}
.btn{
    background-color: #35495e;
    color: #fff;
    padding: 10px 15px;
    margin: 15px 0;
    text-decoration: none;
    float: left;
    font-size: 1.4rem;
}
.btn:hover{
    background-color: #41b883;
}
 #checkboxes label {
    background-image: url('/src/assets/checkbox.png');
    padding-left: 15px;
    height: 12px;
    display: inline-block;
    line-height: 12px;
    background-repeat: no-repeat;
    background-position: 0 0;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 10px;
}
#checkboxes input {
    display: none;
}
#checkboxes input:checked + label {
     background-position: 0 -12px;
}
</style>

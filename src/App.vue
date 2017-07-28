<template>
  <div>
    <app-header v-bind:author="author" v-bind:isActive="isActive" v-bind:logged="logged" v-on:login="updateAuthor" v-on:loginOut="logOut" v-on:hideLogin="hideLogin"></app-header>
    <router-view v-bind:author="author" v-bind:isActive="isActive" v-bind:logged="logged"></router-view>
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
      author:{
          username: '',
          password: ''
      },
      isActive: false,
      logged: false
    }
  },
  methods: {
    updateAuthor: function(){
      // Creating new author
      // this.$http.post('https://vue-blog-authors.firebaseio.com/authors.json', this.author).then(function(data){
      // });

      if(this.author.username=='' || this.author.username==''){
        alert("All fields are required.")
      }else{
          this.$http.get('https://vue-blog-authors.firebaseio.com/authors.json').then(function(data){
              return data.json();
          }).then(function(data){
              var notFound = true;
              for(let key in data){
                  data[key].id = key;
                  // console.log(data[key].username.match(this.author.username));
                  if(data[key].username === this.author.username && data[key].password === this.author.password){
                      this.author.username = data[key].username;
                      this.author.password = data[key].password;
                      this.isActive = false;
                      this.logged = true;
                      notFound = false;
                  }
              }
              if(notFound == true){
                alert('Username or password are not found.');
              }
          });
      }
    },
    logOut: function(){
      this.logged = false;
      this.isActive = false;
      this.author.username = '';
      this.author.password = '';
    },
    hideLogin: function(){
      this.isActive = !this.isActive;
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

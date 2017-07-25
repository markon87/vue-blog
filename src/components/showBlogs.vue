<template>
  <div id="show-blogs">
    <h1>All Blog Aricles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div id="checkboxes">
        <input id="technology" type="checkbox" value="technology" v-model="filter.categories" />
        <label for="technology">Technology</label>
        <input id="design" type="checkbox" value="design" v-model="filter.categories" />
        <label for="design">Design</label>
        <input id="science" type="checkbox" value="science" v-model="filter.categories" />
        <label for="science">Science</label>
        <input id="culture" type="checkbox" value="culture" v-model="filter.categories" />
        <label for="culture">Culture</label>
    </div>
    <div v-for="blog in filteredBlogs" class="single-blog">
        <div v-if="blog.image" class="blog-image">
            <img v-bind:src="blog.image" alt="Blog Image" />
        </div>
        <div class="blog-text">
            <router-link v-bind:to="'/blog/' + blog.id"><h2>{{blog.title | to-uppercase }}</h2></router-link>
            <p class="blog-snippet">{{blog.content | snippet}}</p>
            <!-- <ul>
                <li v-for="categories in filter.categories">{{categories}}</li>
            </ul> -->
        </div>
        <router-link v-bind:to="'/blog/' + blog.id" class="read-more btn">read more</router-link>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
    data() {
        return {
            blogs: [],
            search: '',
            filter:{
                categories: ['technology', 'design', 'science', 'culture']
            }
        }
    },
    created(){
        this.$http.get('https://vue-blog-2c24d.firebaseio.com/posts.json').then(function(data){
            return data.json();
        }).then(function(data){
            var blogsArray = [];
            for(let key in data){
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray.reverse();
        });
    },
    computed: {
        
    },
    filters: {
        toUppercase(value){
            return value.toUpperCase();
        },
        snippet(value){
            return value.slice(0, 500) + '...';
        }
    },
    directives: {
        'rainbow': {
            bind(el,binding, vnode){
                el.style.color = '#' + Math.random().toString().slice(2,8);
            }
        },
        'theme':{
            bind(el,binding, vnode){
                if(binding.value == 'wide'){
                    el.style.maxWidth = "1200px";
                }else if(binding.value == 'narrow'){
                    el.style.maxWidth = "560px";
                }
                if(binding.arg == 'column'){
                    el.style.background = '#ddd',
                    el.style.padding = '20px';
                }
            }
        }
    },
    mixins: [searchMixin]
}
</script>

<style scoped>
#show-blogs *{
    box-sizing: border-box;
}
#show-blogs{
    max-width: 960px;
    margin: 0px auto;
    padding: 20px;
}
input[type="text"]{
    width: 100%;
    padding: 5px 10px;
}
.single-blog{
    padding: 20px 20px 40px 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #f6f6f6;
    border-bottom: 3px solid #35495e;
    overflow: auto;
    position: relative;
}
a{
    color: #35495e;
    text-decoration: none;
}
a:hover{
    color: #41b883;
}
p.blog-snippet{
    font-family: 'Inconsolata', monospace;
}
.blog-image, .blog-text{
    display: inline-block;
}
.blog-image{
    width: 30%;
    margin-right: 10px;
}
.blog-image img{
    width: 100%;
}
.blog-text{
    width: 65%;
    text-align: justify;
    vertical-align: top;
}
.blog-text h2{
    margin: 0;
}
.btn.read-more{
    margin: 0;   
    color: #fff;
    position: absolute;
    bottom: 0;
    right: 15px;
}
</style>

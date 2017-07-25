<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <p class="author"><span>Author:</span> {{blog.author}}</p>
        <ul class="category">
            <p>Categories: </p>
            <li v-for="category in blog.categories">{{category}}</li>
        </ul>
        <hr>
        <article>
            <img v-if="blog.image" v-bind:src="blog.image" alt="Blog Image" />
            {{blog.content}}
        </article>
        <router-link to="/" exact class="back btn">Go Back</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('https://vue-blog-2c24d.firebaseio.com/posts/' + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.blog = data;
        });
    }
}
</script>

<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;
}
h1{
    margin: 0 0 10px 0;
}
p.author, ul.category{
    display: inline-block;
    font-size: 1.2rem;
    margin: 5px 5px 5px 0;
}
ul.category{
    margin: 0;
}
ul.category p{
    display: inline-block;
    margin: 5px 5px 5px 0;
}
ul.category li{
    display: inline-block;
    list-style-type: none;
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #41b883;
    color: #fff;
    font-size: 1.2rem;
}
article{
    font-family: 'Inconsolata', monospace;
    text-align: justify;
}
article img{
    float: left;
    margin-right: 15px;
    max-width: 300px;
}
</style>

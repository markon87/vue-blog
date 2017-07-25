<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submited">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <input id="technology" type="checkbox" value="technology" v-model="blog.categories" />
                <label for="technology">Technology</label>
                <input id="design" type="checkbox" value="design" v-model="blog.categories" />
                <label for="design">Design</label>
                <input id="science" type="checkbox" value="science" v-model="blog.categories" />
                <label for="science">Science</label>
                <input id="culture" type="checkbox" value="culture" v-model="blog.categories" />
                <label for="culture">Culture</label>
            </div>
            <label>Image URL: </label>
            <input type="text" v-model.lazy="blog.image" required />
            <label>Author:</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{ author }}</option>
            </select>
            <button class="btn add-new" v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submited">
            <h3>Thanks for adding your post</h3>
            <router-link to="/" exact class="back btn">Go Back</router-link>
        </div>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p>{{ blog.content }}</p>
            <p>Image:</p>
            <img v-bind:src="blog.image" alt="Preview Image" />
            <hr>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Author: {{blog.author}}</p>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            blog: {
                title: "",
                content: "",
                categories: [],
                author: "",
                image: ""
            },
            authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
            submited: false
        }
    },
    methods: {
        post: function(){
            if(this.blog.title=='' || this.blog.content=='' || this.blog.categories=='' || this.blog.author=='' || this.blog.image==''){
                alert("All fields are required.")
            }else{
                this.$http.post('https://vue-blog-2c24d.firebaseio.com/posts.json', this.blog).then(function(data){
                    this.submited = true;
                });
            }
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
#add-blog form{
    overflow: auto;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
    resize: vertical;
    
}
textarea{
    min-height: 100px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
#preview img{
    width: 100%;
}
h3{
    margin-top: 10px;
}
.back.btn{
    float: none;
}
.add-new.btn{
    margin: 0 10px;
    border: none;
    float: left;
    cursor: pointer;
}
select{
    height: 37px;
    float: left;
}
</style>
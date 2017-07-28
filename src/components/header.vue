<template>
    <nav>
        <ul>
            <li><router-link to="/vue-blog" exact>Blogs</router-link></li>
            <li><router-link to="/vue-blog/add" exact>Add a New Blog</router-link></li>
            <li class="loginLink">
                <span v-on:click="show" v-if="!logged">LogIn</span>
                <span v-if="logged" class="loggedUser">
                    {{this.author.username}}
                    <span class="logOut"><button class="btn" v-on:click.prevent="logOut">Log Out</button></span>
                </span>
            </li>
        </ul>
        <div id="log-in" class="log-in" v-bind:class="{active: isActive}">
            <label>Username:</label>
            <input type="text" v-model.lazy="author.username" required />
            <label>Password:</label>
            <input type="password" v-model.lazy="author.password" required />
            <button class="btn" v-on:click.prevent="log">Log In</button>
        </div>
    </nav>
</template>

<<script>
export default {
    props:{
        author: {
            type: Object
        },
        isActive: {
            type: Boolean
        },
        logged: {
            type: Boolean
        }
    },
    data(){
        return{
            
        }
    },
    methods: {
        show: function(){
            this.$emit('hideLogin');
        },
        log: function(){
            this.$emit('login');
        },
        logOut: function(){
            this.$emit('loginOut');
        }
    }
  
}
</script>

<<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 15px;
}
nav{
    background: #35495e;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #35495e;
}
.log-in {
    position: absolute;
    width: 300px;
    background-color: #fff;
    padding: 15px;
    border: 1px solid #ccc;
    left: calc(70% - 300px);
    top: -500px;
}
.log-in.active {
    top: 50px;
    z-index: 2;
}
.log-in button{
    border: none;
    cursor: pointer;
}
.log-in label, .log-in input{
    margin-bottom: 10px;
}
.loggedUser{
    display: inline-block;
}
.loggedUser, .loginLink{
    color: #fff;
    position: relative;
}
.loginLink:hover{
    cursor:pointer;
}
.loggedUser:before{
    content: "";
    width: 35px;
    height: 35px;
    display: inline-block;
    border-radius: 35px;
    background-color: #eee;
    background-image: url('/vue-blog/src/assets/logo.png');
    vertical-align: middle;
    margin-right: 10px;
    background-size: 70%;
    background-position: center 7px;
    background-repeat: no-repeat;
}
.logOut {
    position: absolute;
    display: none;
    width: 100%;
    height: 100px;
    left: 0;
    bottom: -70px;
}
.logOut .btn{
    position: absolute;
    bottom: 0;
    border: none;
    cursor: pointer;
    min-width: 80px;
}
.loggedUser:hover .logOut, .logOut:hover{
    display: block;
}
</style>


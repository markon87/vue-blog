export default {
    computed: {
        filteredBlogs: function(){
            return this.blogs.filter((blog)=>{
                for(var i=0; i<= blog.categories.length; i++){                      // For every post categories
                    if(this.filter.categories.indexOf(blog.categories[i])>-1){      // check if it is present in filtered array
                        return blog.title.toLowerCase().match(this.search.toLowerCase());
                    }
                }
            });
        }
    }
}
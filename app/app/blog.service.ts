import { Injectable } from 'angular2/core';

@Injectable()
export class BlogService {
 
    private blogs;
    constructor() {
        this.blogs = [
            {title:'Post 1', body:'1text text text text text text text text'},
            {title:'Post 2', body:'2text text text text text text text text'},
            {title:'Post 3', body:'3text text text text text text text text'},
        ];
     }
     
     getBlogs(){
         //replace with json api
         return this.blogs;
     }
     
     addBlog(newBlog){
         console.log(newBlog);
         this.blogs.push(newBlog);
     }

}
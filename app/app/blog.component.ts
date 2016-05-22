import { Component } from 'angular2/core';
import { BlogService } from './blog.service';

@Component({
    selector: 'my-blog',
    template: `<b>blog here</b>
    <form (submit)='addBlog()'>
        <label>Title</label><input type='text' [(ngModel)]="title"><br/> 
        <label>Body</label><input type='textarea' [(ngModel)]="body">
        
        <input type='submit' value='submit'>
    </form>
    <ul>
        <li *ngFor="#blog of blogs">{{blog.title}}, {{blog.body}}</li>
    </ul>`,
    providers:[BlogService]
})
export class BlogComponent {
    private blogs;
    private title;
    private body;
    private newBlog; 
    
    constructor(private _blogService : BlogService) {
       this.blogs = _blogService.getBlogs();
     }

    ngOnInit() { }


    addBlog() {
        console.log('hello');
        this.newBlog ={
            title:this.title,
            body: this.body
        }
        this._blogService.addBlog(this.newBlog);
    }
}
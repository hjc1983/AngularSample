import {Component} from 'angular2/core';
import {BlogComponent} from './blog.component';
import {BlogService} from './blog.service';

@Component({
    selector: 'my-app',
    template: `<h1>{{name}}, My First Angular 2 App</h1><hr>
    <input [value]='name' type="text"/>
    <input [(ngModel)]='name' type="text"/>
    <hr/>
    <br/>
    <my-blog></my-blog>`,
    directives:[BlogComponent],
    providers:[BlogService]
})
export class AppComponent { 
    name:string = "Rob";
}

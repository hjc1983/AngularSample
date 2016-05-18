import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{name}}, My First Angular 2 App</h1><hr>
    <input [value]='name' type="text"/>
    <input [(ngModel)]='name' type="text"/>
    `
})
export class AppComponent { 
    name:string = "Rob";
}

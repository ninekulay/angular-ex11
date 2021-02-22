import { Component , Input } from'@angular/core';
@Component({
    selector:'app-Lab4',
    templateUrl:'./Lab4.component.html',
    styleUrls: ['./Lab4.component.css']
})
export class Lab4Component {
    @Input()
    title: string;
    items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    constructor() {}
}

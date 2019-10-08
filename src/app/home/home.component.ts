import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    clickCounter = 0;
    name = '';

    constructor() { }

    ngOnInit() {
    }

    countClick() {
        this.clickCounter++;
    }

    setClasses() {
        const myClasses = {
            active: this.clickCounter > 4,
            noactive: this.clickCounter <= 4,
        };

        return myClasses;
    }
}

import { Component } from '@angular/core';
import { Auth } from '../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.Component.html'
})
export class HomeComponent { 
    constructor(private auth: Auth){

        
    }
}

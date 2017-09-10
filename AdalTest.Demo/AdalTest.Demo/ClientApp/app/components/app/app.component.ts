import { Component, OnInit } from '@angular/core';
import { Adal4Service } from 'adal-angular4';
const config = {
    tenant: 'sanjaydlive.onmicrosoft.com',
    clientId: '0c95520c-3949-43b9-9d5f-a87742e0ecdc'
};
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
    constructor(private adalSvc: Adal4Service) {
        this.adalSvc.init(config);
    }
 
    ngOnInit(): void {
        this.adalSvc.handleWindowCallback();
    }
}
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class AppConfiguration {
    showNavbar: boolean;
    showComments: boolean;
    landingPageLink: any;
    apiUrl: any;
    login: any;

    constructor() {
        this.showNavbar = true;
        this.landingPageLink = ['/dashboard'];
        this.apiUrl = environment.serverUrls.api;
        this.login = environment.login;
    }
}

import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/components/app.component.html',
	styleUrls: [ 'app/components/app.component.css' ]
})

export class AppComponent implements OnInit { 
	show : boolean = false;
	sideMenuView : string;
	user: any;
	userlink: string = 'Connexion';
	admin: boolean;
	error: any = {};
	
	constructor(private userService: UserService) {}
	
	toggle_sideMenu() {
        this.show = !this.show;
        if(this.user) {
			this.sideMenuView = (this.show===false ? '' : 'profile');
        } else {
			this.sideMenuView = (this.show===false ? '' : 'login');
		}
    }
    
    close_sideMenu() {
        this.show = false;
		this.sideMenuView = '';
    }
    
    onView(v: string) {
		this.sideMenuView = v;
    }
    
    onLogged(l: string) {
		this.getCurrentUser();
		this.show=false;
    }
    
    onUpdated(u: string) {
		this.getCurrentUser();
    }
    
    onClose(c: boolean) {
		this.show=c;
    }
    
    getCurrentUser(): void {
		this.userService
			.getCurrentUser()
			.then(response => {
				this.user = response.user;
				if(this.user) {
					this.userlink = this.user.name;
					this.sideMenuView = 'profile';
					this.admin=this.user.admin;
				} else {
					this.userlink = 'Connexion';
					this.sideMenuView = 'login';
					this.admin=false;
				}
			}, error => { 
				this.error = error; 
			});
    }
    
    ngOnInit(): void {
		this.getCurrentUser();
	}

}

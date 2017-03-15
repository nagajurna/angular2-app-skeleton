import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
	templateUrl: 'app/components/user/user.component.html',
	styleUrls: [ 'app/components/user/user.component.css' ]
})
export class UserComponent implements  OnInit { 
	private user: any = {};
	
	constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}

	getUser(id: any): void {
		this.userService
			.getUser(id)
			.then( response => {
				 if(response.loggedIn===false) {
					console.log(response.error);
				 } else {
					this.user = response.user;
			     }
			}, error => {
				console.log(error);
			})
	}
	
	ngOnInit(): void {
		let id = this.route.snapshot.params['id'];
		this.getUser({id: id});
	}
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
	templateUrl: 'app/components/users/users.component.html',
	styleUrls: [ 'app/components/users/users.component.css' ]
})
export class UsersComponent implements OnInit  { 
	private users: any[] = [];
	private selectedId: string;
	
	constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}

	getUsers(): void {
		this.userService
			.getUsers()
			.then( response => {
				 if(response.admin===false) {
					console.log(response.error);
				 } else {
					this.users = response.users;
			     }
			}, error => {
				console.log(error);
			})
	}
	
	ngOnInit(): void {
		this.route.params
		.subscribe(params => {
			this.selectedId = params['id'];
			this.getUsers();
		})
	}
	
	isSelected(user: any) { return user._id === this.selectedId; }
}

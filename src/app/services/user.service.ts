import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private usersUrl = '/users';  // URL to web users
		
	 constructor(private http: Http) { }
	 
	  register(data: any): Promise<any> {
		return this.http.post(this.usersUrl + '/users/', JSON.stringify(data), {headers: this.headers})
				   .toPromise()
				   .then(response => response.json() as any)
				   .catch(this.handleError);
	  }
	 
	 login(data: any): Promise<any> {
		return this.http.post(this.usersUrl + '/login', JSON.stringify(data), {headers: this.headers})
				   .toPromise()
				   .then(response => response.json() as any)
				   .catch(this.handleError);
	  }
	  
	  logout(): Promise<any> {
		return this.http.get(this.usersUrl + '/logout')
				   .toPromise()
				   .then(response => response.json() as any)
				   .catch(this.handleError);
	  }
	  
	  getUsers(): Promise<any> {
		return this.http.get(this.usersUrl + '/users/')
				   .toPromise()
				   .then(response => response.json() as any)
				   .catch(this.handleError);
	  }
	  
	  getUser(data: any): Promise<any> {
		return this.http.get(this.usersUrl + '/users/' + data.id)
				   .toPromise()
				   .then(response => response.json() as any)
				   .catch(this.handleError);
	  }
	  
	  getCurrentUser(): Promise<any> {
		return this.http.get(this.usersUrl + '/currentuser')
				   .toPromise()
				   .then(response => response.json() as any)
				   .catch(this.handleError);
	  }
	  
	  update(data: any): Promise<any> {
		return this.http.put(this.usersUrl + '/users/' + data.id, JSON.stringify(data), {headers: this.headers})
				   .toPromise()
				   .then(response => response.json() as any)
				   .catch(this.handleError);
	  }
	  
	  updatePassword(data: any): Promise<any> {
		return this.http.put(this.usersUrl + '/users/password/' + data.id, JSON.stringify(data), {headers: this.headers})
				   .toPromise()
				   .then(response => response.json() as any)
				   .catch(this.handleError);
	  }
	  
	  passwordReset(data: any): Promise<any> {
		return this.http.post(this.usersUrl + '/password_reset/', JSON.stringify(data), {headers: this.headers})
				   .toPromise()
				   .then(response => response.json() as any)
				   .catch(this.handleError);
	  }
	  
	  passwordResetEdit(data: any): Promise<any> {
		return this.http.put(this.usersUrl + '/password_reset/edit', JSON.stringify(data), {headers: this.headers})
				   .toPromise()
				   .then(response => response.json() as any)
				   .catch(this.handleError);
	  }
	  
	  
	 private handleError(error: any): Promise<any> {
	    return Promise.reject({ message: "L\'application a rencontré une erreur, veuillez recommencer plus tard." });
	 }
}

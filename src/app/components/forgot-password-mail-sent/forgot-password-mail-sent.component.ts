import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'forgot-password-mail-sent',
  templateUrl: 'app/components/forgot-password-mail-sent/forgot-password-mail-sent.component.html',
  styleUrls: [ 'app/components/forgot-password-mail-sent/forgot-password-mail-sent.component.css' ]
})
export class ForgotPasswordMailSentComponent { 
	@Output() onView = new EventEmitter<string>();
	
	constructor() {}
	
	change_view(v: string) {
		this.onView.emit(v)
	}
	
}

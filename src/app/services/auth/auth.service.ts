import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient) {}
	logAdminIn(email, password) {
		return this.http.post(`${environment.baseURL}admin/login`, {
			email,
			password
		});
	}
	logUserIn(email, password) {
		return this.http.post(`${environment.baseURL}user/login`, {
			email,
			password
		});
	}
}

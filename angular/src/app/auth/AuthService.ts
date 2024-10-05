import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    authenticated = false;

    constructor(private http: HttpClient) {
    
    }

    authenticate(credentials: any) {
        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        const user: Observable<any> = this.http.get('user', {headers: headers});

        user.subscribe(response => {
            if(response['name']) {
                this.authenticated = true;
            }
            else {
                this.authenticated;
            }
        })
    }
}
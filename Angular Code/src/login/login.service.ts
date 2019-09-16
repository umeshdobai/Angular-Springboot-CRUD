import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "src/login/login";


@Injectable({
    providedIn : 'root'
})


export class LoginService {

    constructor(private http : HttpClient){

    }

    
    
    url='http://localhost:8888/admin/get';
    

    getAdmin(login : Login){ 

        let username='user'
        let password='password'
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) }); 
        return this.http.post(this.url,login,{headers});
    }

}
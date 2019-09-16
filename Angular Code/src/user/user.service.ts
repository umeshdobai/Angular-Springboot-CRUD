import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "src/addbook/addbook";


@Injectable({
    providedIn : 'root'
})


export class UserService {

    constructor(private http : HttpClient){

    }

    config = {headers : {
            "Content-Type": "application/json; charset = utf-8;"
        }
    };
    
    url='http://localhost:8888/system/login';

    update(user : Book){ 
         let username='user'
        let password='password'
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) }); 
        console.log(user);
        return this.http.post(this.url, user,{headers});
    }

}
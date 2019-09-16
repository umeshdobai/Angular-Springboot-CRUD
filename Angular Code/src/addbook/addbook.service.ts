import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "src/addbook/addbook";

@Injectable({
    providedIn : 'root'
})


export class AddbookService {

    constructor(private http : HttpClient){

    }

    config = {headers : {
            "Content-Type": "application/json; charset = utf-8;"
        }
    };

    url='http://localhost:8888/system/add';

    enroll(book : Book){ 

        let username='user'
        let password='password'
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) }); 
        console.log(book);
        return this.http.post(this.url, book,{headers});
    }

}
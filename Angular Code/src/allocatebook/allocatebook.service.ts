import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AllocateBook } from "src/allocatebook/allocatebook";

@Injectable({
    providedIn : 'root'
})


export class AllocatebookService {

    constructor(private http : HttpClient){

    }

    config = {headers : {
            "Content-Type": "application/json; charset = utf-8;"
        }
    };
    url='http://localhost:8888/allocatebookstud/add';

    enroll(book : AllocateBook){ 
        
        let username='user'
        let password='password'
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) }); 
        console.log(book);
        return this.http.post(this.url, book,{headers});
    }

}
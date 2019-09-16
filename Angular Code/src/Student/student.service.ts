import { Injectable } from '@angular/core';
import { Student } from './Student';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})
export class StudentService{
      stud = new Student();
      
     constructor(private httpSer:HttpClient) {
    }
    
    findDetails():Observable<Student[]>{
        
        let username='user'
        let password='password'
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) }); 
        return this.httpSer.get<Student[]>(`http://localhost:8888/allocatebookstud/get`,{headers}).pipe(
        tap(data => console.log('Book:'+JSON.stringify(data))),
        catchError(this.handleError)
    );
    }
    private handleError(err:HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
    
        return throwError(errorMessage);      
    }
}
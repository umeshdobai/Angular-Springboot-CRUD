import { Injectable } from '@angular/core';
import { IBook } from './Book';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})
export class BookService{
     bookurl = '/system';
      book = new IBook();
     constructor(private httpSer:HttpClient) {
    }
     getBookList():Observable<IBook[]>{

        let username='user'
        let password='password'
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.httpSer.get<IBook[]>("http://localhost:8888/system/hello",{headers}).pipe(
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
  deleteBook(isbn:number): Observable<any> { 
     let username='user'
     let password='password'
     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) }); 
      return this.httpSer.delete<any>(`http://localhost:8888/system/del/${isbn}`,{headers});  
      
  }  
  
   updateBook(isbn: number,book:IBook): Observable<any> {  
      let username='user'
     let password='password'
     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) }); 
     return this.httpSer.put(`http://localhost:8888/system/upd/${isbn}`, this.book,{headers});  
  }    
    setter(book:IBook){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      
     this.book=book;
   }

  getter(){
    return this.book;
  }
}
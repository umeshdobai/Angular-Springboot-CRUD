import { Component, OnInit } from '@angular/core';
import { IBook } from './Book';
import { BookService } from './book.service';
import { Router } from "@angular/router";

@Component({
  selector: 'book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {

        private books = new IBook();
        constructor(private bookservice:BookService,private router:Router) { }
        book:IBook[]=[];
        ngOnInit(): void {
            this.bookservice.getBookList().subscribe(
            book =>{this.book= book;},

            )

            window.addEventListener("beforeunload", function (e) {
              var confirmationMessage = "\o/";
            console.log("cond");
              e.returnValue = confirmationMessage;     
              return confirmationMessage;             
            });

        }
         getBookList()
        {
          this.bookservice.getBookList().subscribe(data=>{
            this.book=this.book;
          })
        }
        
        deleteBook(isbn:number){
          if(confirm("Do you want to delete"))
          {
              this.bookservice.deleteBook(isbn).subscribe(
                 
              ()=>{this.getBookList();
              this.ngOnInit();},
              book =>{this.book= book;}
              
               );
          }
          else{
            return;
          }
          } 
          updateBook(isbn:number){  
            this.bookservice.updateBook(this.books.isbn, this.books).subscribe(  
            data => {  
                  this.getBookList=data             
                  },  
                  error => console.log(error)
            );  
            this.router.navigate(['user']);
          }
          
           
          
          goBack(){
          this.router.navigate(['admin']);
          }
  

}

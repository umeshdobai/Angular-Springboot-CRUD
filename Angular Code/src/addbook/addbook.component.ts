import { Component, OnInit } from '@angular/core';
import { IBook } from "src/Book/Book";
import { BookService } from "src/Book/book.service";
import { Router } from "@angular/router/router";
import { AddbookService } from "src/addbook/addbook.service";
import { Book } from "src/addbook/addbook";
import { NgForm } from "@angular/forms/forms";
@Component({
	selector:'addbook',
	templateUrl:'./addbook.component.html',
})
export class AddbookComponent implements OnInit
{
	
	 book=new Book();
	ngOnInit(): void {
       
		
	}
	
	
  constructor(private addbookservice:AddbookService) {

   }
    save(addbook:NgForm){

        console.log("Saved Form" + this.book);
        

        this.addbookservice.enroll(this.book).subscribe(
          data =>
            { 
                if(data!=null)
                {
                    alert("Successfully data inserted");
                    console.log("success",data);
                     
                }
                if(data==null)
                {
                     alert("Isbn number is already exist");
                }
                
                
            },
             error => console.error('Error !!', error),
        )
        
    }



}
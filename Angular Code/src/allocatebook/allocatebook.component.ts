import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";
import { AllocateBook } from "src/allocatebook/allocatebook";
import { AllocatebookService } from "src/allocatebook/allocatebook.service";
@Component({
	selector:'admin',
	templateUrl:'./allocatebook.component.html'
})
export class AllocateBookComponent implements OnInit
{
    ngOnInit(): void {
        
    }
constructor(private addbookservice:AllocatebookService) {

   }

    allocatebook =new AllocateBook();

    save(allocatebook:NgForm){

        console.log("Saved Form" + this.allocatebook);
        this.addbookservice.enroll(this.allocatebook).subscribe(
            data =>
            { 
                if(data!=null)
                {
                    alert("Successfully data inserted");
                    console.log("success",data);
                     
                }
                else{
                        alert("Isbn no is not found");
                }
            },
            error => console.error('Error !!', error),
        )      
    }
}
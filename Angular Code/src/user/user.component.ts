
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "src/user/user.service";
import { Book } from "src/addbook/addbook";


@Component({
    selector:'user-app',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit{
    registerForm :FormGroup;
    submitted = false;

    constructor(private userservice:UserService,private fb:FormBuilder) {}
    book:Book;
    ngOnInit(): void {
    
		this.registerForm =this.fb.group({
			isbn:['',Validators.required],
			bookname:['',Validators.required],
            authorname:['',Validators.required],
            copy:['',Validators.required]        
            
		})
    }
    get f() { return this.registerForm .controls; }

     onSubmit() {
        this.submitted = true;

         this.userservice.update(this.book).subscribe(
          data =>
            { 
                    alert("Successfully data Updated");
                    console.log("success",data);               
            },
             error => console.error('Error !!', error),
        )
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
    }
    

    

}
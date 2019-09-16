import {Component,OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from "../service/authentication.service";
import { Login } from "src/login/login";
import { Router } from "@angular/router";
import { LoginService } from "src/login/login.service";

@Component({
	selector:'login',
	templateUrl:'./login.component.html',
	styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{


	login = new Login();
	constructor(private router:Router, private auth:AuthenticationService,private loginservice:LoginService){}
	ngOnInit(){
		
	}

	save(userForm:NgForm){
            console.log(userForm.form);
            
    
    }
	
	checkLogin() {
  //   if (this.loginservice.authenticate(this.login.username, this.login.password)
  //   ) {
  //     this.router.navigate([''])
  //     this.login.invalidLogin = false
  //   } else
  //     this.login.invalidLogin = true
  // }
  this.loginservice.getAdmin(this.login).subscribe(
    data=>{
      if(data==true){
        this.auth.getLoggedin(data)
        this.router.navigate(['home'])
      }
    else if(data==false){
      alert("Inavalid username or password");
      this.auth.getLoggedin(data)
    }
  },
    error=>this.auth.getLoggedin(error)
  );
  
  }

	
}
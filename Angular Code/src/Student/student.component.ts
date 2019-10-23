import { Component, OnInit } from '@angular/core';
import { Student } from "src/Student/student";
import { StudentService } from "src/Student/student.service";
@Component({
	selector:'student',
	templateUrl:'./student.component.html'
})
export class StudentComponent implements OnInit{
	stud = new Student();
	studs:Student[]=[];
	constructor(private studentservice:StudentService){}
	ngOnInit(): void {
		this.studentservice.findDetails().subscribe(
            stud =>{this.studs= stud;},

            );
	}
	
	
}

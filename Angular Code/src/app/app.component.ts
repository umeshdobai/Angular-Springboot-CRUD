import { Component } from '@angular/core';
import { AuthenticationService } from "src/service/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(private service:AuthenticationService){}
}

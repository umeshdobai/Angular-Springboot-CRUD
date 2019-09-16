import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homeComponent } from '../Home/home.component';
import { pagenotfound } from "src/pagenotfound/pagenotfound.component";
import { LoginComponent } from "src/login/login.component";
import { UserComponent } from "src/user/user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import{HttpClientModule} from'@angular/common/http';
import { BookComponent } from "src/Book/book.component";
import { StudentComponent } from "src/Student/student.component";
import { AddbookComponent } from "src/addbook/addbook.component";
import { AdminComponent } from "src/admin/admin.component";
import { HelpComponent } from "src/help/help.component";
import { LogoutComponent } from "src/logout/logout.component";
import { AllocateBookComponent } from "src/allocatebook/allocatebook.component";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,homeComponent,pagenotfound,LoginComponent,UserComponent,BookComponent,StudentComponent,
    AddbookComponent,AdminComponent,HelpComponent,LogoutComponent,AllocateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

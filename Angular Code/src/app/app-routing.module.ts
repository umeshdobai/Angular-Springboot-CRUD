import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeComponent } from "src/Home/home.component";
import { pagenotfound } from "src/pagenotfound/pagenotfound.component";
import { LoginComponent } from "src/login/login.component";
import { UserComponent } from "src/user/user.component";
import { BookComponent } from "src/Book/book.component";
import { StudentComponent } from "src/Student/student.component";
import { AddbookComponent } from "src/addbook/addbook.component";
import { AdminComponent } from "src/admin/admin.component";
import { HelpComponent } from "src/help/help.component";
import { LogoutComponent } from "src/logout/logout.component";
import { AllocateBookComponent } from "src/allocatebook/allocatebook.component";
import { AuthGaurdService } from "src/service/AuthGaurd.service";


const routes: Routes = [
  {path:'home',component:homeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  { path:'user',component:UserComponent,canActivate:[AuthGaurdService]},
  { path: 'book',component:BookComponent,canActivate:[AuthGaurdService]},
   { path: 'addbook',component:AddbookComponent,canActivate:[AuthGaurdService]}, 
   {path: 'allocatebook',component:AllocateBookComponent,canActivate:[AuthGaurdService]},
    { path: 'help',component:HelpComponent}, 
   {path:'admin',component:AdminComponent,canActivate:[AuthGaurdService]},
  {path:'student',component:StudentComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',component:pagenotfound}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUSComponent } from './about-us/about-us.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutUs',component:AboutUSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"Home",
  component:HomeComponent,
  children:[
    {path:"",redirectTo:'dashboard',pathMatch:'full'},
    {path:"dashboard",component:DashboardComponent},
    {path:"product",component:ProductComponent}
  ]
},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

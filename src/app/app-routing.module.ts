import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ListDisplayComponent} from './list-display/list-display.component';
import {FormComponent} from "./form/form.component";
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "./layout/layout.component"

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'listdisplay',
        component: ListDisplayComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
    ]
  },
  
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '**', 
    redirectTo: 'login', 
    pathMatch: 'full'
  }
  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {enableTracing: true,
        useHash: true}),
   
  
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
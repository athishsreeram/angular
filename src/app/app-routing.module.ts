import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {  path: 'department', component : DepartmentComponent },
  {  path: 'test', component : TestComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentComponent];
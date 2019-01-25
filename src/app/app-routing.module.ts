import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent/parent.component';
import { HtmlParentComponent } from './htmlParent/html-parent/html-parent.component';


const routes: Routes = [
  { path: "", component:HtmlParentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

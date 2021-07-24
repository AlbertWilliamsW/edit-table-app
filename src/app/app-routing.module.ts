import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';
import { SampleProjectComponent } from './sample-project/sample-project.component';

const routes: Routes = [
    {path: 'table', component: SampleProjectComponent},
    {path: 'link1', component: Link1Component},
    {path: 'link2', component: Link2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

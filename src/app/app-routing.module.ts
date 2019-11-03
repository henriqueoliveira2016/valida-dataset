import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportComponent } from './pages/dataSet/import/import.component';
import { ListComponent } from './pages/dataset/list/list.component';


const routes: Routes = [
  {
      path: 'import', component: ImportComponent
  },
  {
    path: 'list', component: ListComponent
  },
  { path: '', redirectTo: '/import', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

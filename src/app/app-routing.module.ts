import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './mainApp/main-view/main-view.component';
import { AddEnvironmentComponent } from './components/add-environment/add-environment.component';
import { EditDeleteEnvironmentComponent } from './components/edit-delete-environment/edit-delete-environment.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent
  },
  {
    path: 'Environments',
    component: MainViewComponent
  },
  {
    path: 'Environments/add',
    component: AddEnvironmentComponent
  },
  {
    path: 'Environments/edit/:id',
    component: EditDeleteEnvironmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

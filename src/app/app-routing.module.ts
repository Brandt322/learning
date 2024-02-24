import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/components/layout/main/main.component';
import { DashboardComponent } from './shared/components/layout/dashboard/dashboard.component';
import { FormComponent } from './shared/components/utils/form/form.component';

const routes: Routes = [
  { path: '', redirectTo: '/card', pathMatch: 'full' },
  { path: 'card', component: MainComponent },
  {
    path: 'dashboard', component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

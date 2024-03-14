import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainComponent } from './components/layout/main/main.component';
import { CardComponent } from './components/utils/card/card.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/utils/form/form.component';
import { ProductComponent } from './components/utils/product/product.component';

@NgModule({
  declarations: [HeaderComponent, MainComponent, CardComponent, FooterComponent, DashboardComponent, FormComponent, ProductComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [HeaderComponent, MainComponent, CardComponent, FooterComponent, DashboardComponent, FormComponent, ProductComponent],
})
export class SharedModule { }

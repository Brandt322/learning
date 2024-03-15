import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/utils/product/product.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent, ProductComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [HeaderComponent, FooterComponent, MainComponent, ProductComponent],
})
export class SharedModule { }

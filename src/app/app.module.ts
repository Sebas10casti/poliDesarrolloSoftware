import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCamera, IconHeart, IconBrandGithub } from 'angular-tabler-icons/icons';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { ProductComponent } from './components/product/product.component';
import { ListCartComponent } from './components/list-cart/list-cart.component';


const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    DetailProductComponent,
    ProductComponent,
    ListCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TablerIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    TablerIconsModule
  ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCamera, IconHeart, IconBrandGithub } from 'angular-tabler-icons/icons';


const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent
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

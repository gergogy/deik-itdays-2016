import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRowComponent } from './components/user-list/user-row/user-row.component';
import { UserDetailsComponent } from './components/user-list/user-details/user-details.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SearchFieldDirective } from './directives/search-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DataBindingComponent,
    UserListComponent,
    UserRowComponent,
    UserDetailsComponent,
    AboutComponent,
    NotFoundComponent,
    HighlightDirective,
    SearchFieldDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

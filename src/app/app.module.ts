import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './mainApp/main-view/main-view.component';
import { AddEnvironmentComponent } from './components/add-environment/add-environment.component';
import { EditDeleteEnvironmentComponent } from './components/edit-delete-environment/edit-delete-environment.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    AddEnvironmentComponent,
    EditDeleteEnvironmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

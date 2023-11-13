import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { LoginComponent } from './site/login/login.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BulmaComponent } from './site/bulma/bulma.component';
import { LoginNewComponent } from './site/login-new/login-new.component';
import { ChildComponent } from './site/child/child.component';
import { SmartLoginComponent } from './site/smart-login/smart-login.component';

// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './site/dashbord/dashbord.component';
import { SmartDashbordComponent } from './site/smart-dashbord/smart-dashbord.component';
import { StatusComponent } from './site/status/status.component';
import { NewComponent } from './site/new/new.component';
import { TableFilterComponent } from './site/table-filter/table-filter.component';
import{HttpClientModule}from'@angular/common/http';
import { FilterComponent } from './site/filter/filter.component';
import { FormComponent } from './site/form/form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MyModalComponent } from './my-modal/my-modal.component';
import { ProjectComponent } from './site/project/project.component';
import { PrimeNgComponent } from './site/prime-ng/prime-ng.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationComponent } from './site/pagination/pagination.component';
import { MultiCardComponent } from './site/multi-card/multi-card.component';






@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    LoginComponent,
    BulmaComponent,
    LoginNewComponent,
    ChildComponent,
    SmartLoginComponent,
    DashbordComponent,
    SmartDashbordComponent,
    StatusComponent,
    NewComponent,
    TableFilterComponent,
    FilterComponent,
    FormComponent,
    MyModalComponent,
    ProjectComponent,
    PrimeNgComponent,
    PaginationComponent,
    MultiCardComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    NgbModule,
    NgxPaginationModule

    
    
    
    
  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

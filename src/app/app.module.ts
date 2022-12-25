import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FootersComponent } from './components/footers/footers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ParagraphCapitalPipe } from './pipes/paragraph-capital.pipe';
import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CustomersComponent } from './components/customer/customer.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignWithGoogleDirective } from './directives/sign-with-google.directive';
import { SignOutDirective } from './directives/sign-out-with-google.directive';
import { CustomersFinderPipe } from './pipes/customers-finder.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    FootersComponent,
    NavbarComponent,
    SidenavComponent,
    ParagraphCapitalPipe,
    PageHeaderComponent,
    PageNotFoundComponent,
    CustomersNewComponent,
         CustomersComponent,
         CustomersDetailsComponent,
         CustomersEditComponent,
         LoginComponent,
         DashboardComponent,
         SignWithGoogleDirective,
         SignOutDirective,
         CustomersFinderPipe,
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})           
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { BankKiosksComponent } from './components/bank-kiosks/bank-kiosks.component';
import { BankAccountService, StandardBonusCalculator } from './services/bank-account.services';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    BankKiosksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BankAccountService,
    StandardBonusCalculator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

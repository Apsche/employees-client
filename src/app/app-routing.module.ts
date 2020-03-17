import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { BankKiosksComponent } from './components/bank-kiosks/bank-kiosks.component';


const routes: Routes = [
  {
    path: 'shopping',
    component: ShoppingListComponent
  },
  {
    path: 'banking',
    component: BankKiosksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

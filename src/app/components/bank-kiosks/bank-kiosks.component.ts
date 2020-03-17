import { Component, OnInit } from '@angular/core';
import { BankAccountService } from 'src/app/services/bank-account.services';

@Component({
  selector: 'app-bank-kiosks',
  templateUrl: './bank-kiosks.component.html',
  styleUrls: ['./bank-kiosks.component.css']
})
export class BankKiosksComponent implements OnInit {

  currentBalance: number;

  constructor(private bankAccount: BankAccountService) { }

  ngOnInit(): void {
    this.currentBalance = this.bankAccount.getBalance();
  }

  deposit(amountEl: HTMLInputElement) {
    this.bankAccount.deposit(amountEl.valueAsNumber);
    this.currentBalance = this.bankAccount.getBalance();
  }

  withdraw(amountEl: HTMLInputElement) {
    this.bankAccount.withdraw(amountEl.valueAsNumber);
    this.currentBalance = this.bankAccount.getBalance();
  }

  doTransaction(op: Action<number>, amount: number) {
    op(amount);
    this.currentBalance = this.bankAccount.getBalance();
  }

}

type Action<T> = (amount: T) => void;

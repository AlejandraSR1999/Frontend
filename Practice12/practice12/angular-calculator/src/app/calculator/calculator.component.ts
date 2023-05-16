import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { display, clear, calculate } from '../store/actions/calculator.actions';
import { State } from '../store'; // import the State interface

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result$ = this.store.select(state => state.calculator);

  constructor(private store: Store<State>) { } // provide the State interface as a type parameter

  display(number: string): void {
    this.store.dispatch(display({ number }));
  }

  clear(): void {
    this.store.dispatch(clear());
  }

  calculate(): void {
    this.store.dispatch(calculate());
  }
}

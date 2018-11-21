import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  DropDown: boolean;
  states: State[];
  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice()))
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(
      state => state.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  ngOnInit() {
    this.filteredStates = JSON.parse(localStorage.getItem('contacts'));
  }
}

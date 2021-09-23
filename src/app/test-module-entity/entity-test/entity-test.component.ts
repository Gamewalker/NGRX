import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {loadEntityNames} from "../entity-name.actions";
import {EMPTY, Observable} from "rxjs";
import {CatFact} from "../../cat-fact";
import {selectAllCatFacts} from "../entity-name.reducer";

@Component({
  selector: 'app-entity-test',
  templateUrl: './entity-test.component.html',
  styleUrls: ['./entity-test.component.css']
})
export class EntityTestComponent implements OnInit {

  public catFacts$: Observable<CatFact[]> = EMPTY;

  constructor(private store: Store) {
    this.catFacts$ = this.store.select(selectAllCatFacts);
  }

  ngOnInit(): void {
    this.store.dispatch(loadEntityNames());
  }

}

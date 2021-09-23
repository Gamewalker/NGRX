import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {loadFeatureNames} from "../feature-name.actions";
import {CatFact} from "../../cat-fact";
import {EMPTY, Observable} from "rxjs";
import {getCatFact} from "../feature-name.selectors";

@Component({
  selector: 'app-feature-test',
  templateUrl: './feature-test.component.html',
  styleUrls: ['./feature-test.component.css']
})
export class FeatureTestComponent implements OnInit {

  public catFact$: Observable<CatFact> = EMPTY;

  constructor(private store: Store) {
    this.catFact$ = this.store.select(getCatFact);
  }

  ngOnInit(): void {
    this.store.dispatch(loadFeatureNames());
  }

  loadNewFact() {
    this.store.dispatch(loadFeatureNames());
  }
}

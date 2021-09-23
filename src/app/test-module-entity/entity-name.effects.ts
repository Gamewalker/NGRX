import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from "rxjs/operators";
import {CatFact} from "../cat-fact";
import {of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import * as EntityNameActions from './entity-name.actions';



@Injectable()
export class EntityNameEffects {

  loadFeatureNames$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EntityNameActions.loadEntityNames),
      concatMap(() =>
        this.http.get<{data: CatFact[]}>('https://catfact.ninja/facts').pipe(
          map(response => {
            // Entities werden über IDs verwaltet, da die REST API keine IDs übermittelt,
            // aken wir hier einfach IDs der Reihe nach ... 0,1,2 ...
            let catFacts: CatFact[] = response.data;
            catFacts.map((catFact, index) => catFact.id = index);

            return EntityNameActions.loadEntityNamesSuccess({data: catFacts})
          }),
          catchError(error => of(EntityNameActions.loadEntityNamesFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}

}

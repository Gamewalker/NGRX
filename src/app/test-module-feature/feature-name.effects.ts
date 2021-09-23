import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as FeatureNameActions from './feature-name.actions';
import {HttpClient} from "@angular/common/http";
import {CatFact} from "../cat-fact";



@Injectable()
export class FeatureNameEffects {

  loadFeatureNames$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(FeatureNameActions.loadFeatureNames),
      concatMap(() =>
        this.http.get<CatFact>('https://catfact.ninja/fact').pipe(
          map(data => FeatureNameActions.loadFeatureNamesSuccess({ data })),
          catchError(error => of(FeatureNameActions.loadFeatureNamesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions, private http: HttpClient) {}

}

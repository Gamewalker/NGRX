import { Action, createReducer, on } from '@ngrx/store';
import * as FeatureNameActions from './feature-name.actions';
import {CatFact} from "../cat-fact";

export const featureNameFeatureKey = 'featureName';

export interface State {
  fact: CatFact
}

export const initialState: State = {
  fact: { fact: '', length: 0 }
};


export const reducer = createReducer(
  initialState,

  on(FeatureNameActions.loadFeatureNames, state => state),
  on(FeatureNameActions.loadFeatureNamesSuccess, (state, action) => ({
    ...state,
    fact: action.data
  })),
  on(FeatureNameActions.loadFeatureNamesFailure, (state, action) => state),

);


import { createAction, props } from '@ngrx/store';
import {CatFact} from "../cat-fact";

export const loadFeatureNames = createAction(
  '[FeatureName] Load FeatureNames'
);

export const loadFeatureNamesSuccess = createAction(
  '[FeatureName] Load FeatureNames Success',
  props<{ data: CatFact }>()
);

export const loadFeatureNamesFailure = createAction(
  '[FeatureName] Load FeatureNames Failure',
  props<{ error: any }>()
);

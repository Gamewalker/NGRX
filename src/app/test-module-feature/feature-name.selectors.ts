import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeatureName from './feature-name.reducer';

export const selectFeatureNameState = createFeatureSelector<fromFeatureName.State>(
  fromFeatureName.featureNameFeatureKey
);

export const getCatFact = createSelector(
  selectFeatureNameState,
  (state: fromFeatureName.State) => state.fact
);

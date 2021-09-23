import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { EntityName } from './entity-name.model';
import * as EntityNameActions from './entity-name.actions';
import {CatFact} from "../cat-fact";

export const entityNamesFeatureKey = 'entityNames';

export interface State extends EntityState<CatFact> {
  // additional entities state properties
}

export const adapter: EntityAdapter<CatFact> = createEntityAdapter<CatFact>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(EntityNameActions.addEntityName,
    (state, action) => adapter.addOne(action.entityName, state)
  ),
  on(EntityNameActions.upsertEntityName,
    (state, action) => adapter.upsertOne(action.entityName, state)
  ),
  on(EntityNameActions.addEntityNames,
    (state, action) => adapter.addMany(action.entityNames, state)
  ),
  on(EntityNameActions.upsertEntityNames,
    (state, action) => adapter.upsertMany(action.entityNames, state)
  ),
  on(EntityNameActions.updateEntityName,
    (state, action) => adapter.updateOne(action.entityName, state)
  ),
  on(EntityNameActions.updateEntityNames,
    (state, action) => adapter.updateMany(action.entityNames, state)
  ),
  on(EntityNameActions.deleteEntityName,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(EntityNameActions.deleteEntityNames,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(EntityNameActions.loadEntityNamesSuccess,
    (state, action) => adapter.setAll(action.data, state)
  ),
  on(EntityNameActions.clearEntityNames,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectUserState = createFeatureSelector<State>(entityNamesFeatureKey);

export const selectAllCatFacts = createSelector(
  selectUserState,
  selectAll
);

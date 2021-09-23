import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { EntityName } from './entity-name.model';
import {CatFact} from "../cat-fact";

export const loadEntityNames = createAction(
  '[EntityName/API] Load EntityNames'
);

export const loadEntityNamesSuccess = createAction(
  '[EntityName/API] Load EntityNames Success',
  props<{ data: CatFact[] }>()
);

export const loadEntityNamesFailure = createAction(
  '[EntityName/API] Load EntityNames Failure',
  props<{ error: any }>()
);





export const addEntityName = createAction(
  '[EntityName/API] Add EntityName',
  props<{ entityName: CatFact }>()
);

export const upsertEntityName = createAction(
  '[EntityName/API] Upsert EntityName',
  props<{ entityName: CatFact }>()
);

export const addEntityNames = createAction(
  '[EntityName/API] Add EntityNames',
  props<{ entityNames: CatFact[] }>()
);

export const upsertEntityNames = createAction(
  '[EntityName/API] Upsert EntityNames',
  props<{ entityNames: CatFact[] }>()
);

export const updateEntityName = createAction(
  '[EntityName/API] Update EntityName',
  props<{ entityName: Update<CatFact> }>()
);

export const updateEntityNames = createAction(
  '[EntityName/API] Update EntityNames',
  props<{ entityNames: Update<CatFact>[] }>()
);

export const deleteEntityName = createAction(
  '[EntityName/API] Delete EntityName',
  props<{ id: string }>()
);

export const deleteEntityNames = createAction(
  '[EntityName/API] Delete EntityNames',
  props<{ ids: string[] }>()
);

export const clearEntityNames = createAction(
  '[EntityName/API] Clear EntityNames'
);

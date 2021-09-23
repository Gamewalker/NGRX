import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EntityNameEffects } from './entity-name.effects';

describe('EntityNameEffects', () => {
  let actions$: Observable<any>;
  let effects: EntityNameEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EntityNameEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EntityNameEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

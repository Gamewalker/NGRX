import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromEntityName from './entity-name.reducer';
import { EntityTestComponent } from './entity-test/entity-test.component';
import {RouterModule} from "@angular/router";
import { EffectsModule } from '@ngrx/effects';
import { EntityNameEffects } from './entity-name.effects';



@NgModule({
  declarations: [
    EntityTestComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromEntityName.entityNamesFeatureKey, fromEntityName.reducer),
    RouterModule.forChild([
      {
        path: '',
        component: EntityTestComponent,
      }
    ]),
    EffectsModule.forFeature([EntityNameEffects]),
  ]
})
export class TestModuleEntityModule { }

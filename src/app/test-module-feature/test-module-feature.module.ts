import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTestComponent } from './feature-test/feature-test.component';
import { StoreModule } from '@ngrx/store';
import * as fromFeatureName from './feature-name.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FeatureNameEffects } from './feature-name.effects';
import {RouterModule} from "@angular/router";
import {EntityTestComponent} from "../test-module-entity/entity-test/entity-test.component";



@NgModule({
  declarations: [
    FeatureTestComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromFeatureName.featureNameFeatureKey, fromFeatureName.reducer),
    EffectsModule.forFeature([FeatureNameEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: FeatureTestComponent,
      }
    ]),
  ]
})
export class TestModuleFeatureModule { }

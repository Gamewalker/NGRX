### Chrome Dev Tool
Hilft einem sehr bei der Entwicklung, kann jeden Call im Store anzeigen und sogar Rückgängig machen
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=de

### Pakete installieren
ng add @ngrx/store@latest --skip-confirmation
ng add @ngrx/store-devtools@latest --skip-confirmation
ng add @ngrx/effects@latest --skip-confirmation
ng add @ngrx/router-store@latest --skip-confirmation
ng add @ngrx/entity@latest --skip-confirmation
ng add @ngrx/schematics@latest --skip-confirmation --defaults

### Root Store anlegen
ng generate store State --root --state-path store --module app.module.ts

### Module zum Testen anlegen
ng generate @schematics/angular:module TestModuleEntity
ng generate @schematics/angular:module TestModuleFeature

### NGRX Entity in Module anlegen 
ng generate entity test-module-entity/EntityName --module test-module-entity.module.ts --creators
ng generate effect test-module-entity/EntityName --module test-module-entity/test-module-entity.module.ts --creators --api

### NGRX Feature in Module anlegen (bestätigen mit y und danach den Standard 'load' mit Enter wählen)
ng generate feature test-module-feature/FeatureName --module test-module-feature/test-module-feature.module.ts --creators

### Testkomponenten anlegen
ng generate @schematics/angular:component test-module-entity/EntityTest
ng generate @schematics/angular:component test-module-feature/FeatureTest

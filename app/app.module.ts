import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ApplicationComponent } from './components/application/applicationComponent';
import { CharacterComponent } from './components/character/characterComponent';
import { AttributesComponent } from './components/attributes/attributesComponent';

@NgModule({
    imports:      [ BrowserModule,
                    RouterModule.forRoot([
                      {path: '',           component: CharacterComponent},
                      {path: 'attributes', component: AttributesComponent}
                    ]) ],
    declarations: [ ApplicationComponent,
                    CharacterComponent,
                    AttributesComponent ],
    providers:    [ {provide: APP_BASE_HREF, useValue: '/'} ],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }

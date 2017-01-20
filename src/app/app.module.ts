import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomComponent } from './hom/hom.component';
// import { RouterModule ,Routes } from '@angular/router'

// const appRouters:Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full'},
//   { path: 'home', components: HomComponent},
//   { path : 'about', loadChildren: () => new Promise(resolve -> {
//     (require as any).ensure([], (require: any) => {
//       resolve(require('./about/about.module').AboutModule)
//       })
//     })
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
    // RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

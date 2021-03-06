/*NOTE: everything used in the application must be imported here. this INCLUDES
        code written by me */

//libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

//services
import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';

/* used in association with RouterModule.forRoot();
    maps a url path to a component */
const appRoutes: Routes = [
  {path: '', component: UserComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) //NOTE: remember to change app.html to <router-outlet>
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

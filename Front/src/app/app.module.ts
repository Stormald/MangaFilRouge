import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAnimeComponent } from './pages/list-anime/list-anime.component';
import { DetailAnimeComponent } from './components/detail-anime/detail-anime.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAnimeComponent,
    DetailAnimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

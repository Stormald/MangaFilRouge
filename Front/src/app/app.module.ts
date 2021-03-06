import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor, ErrorInterceptor } from './helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListeComponent } from './components/liste/liste.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailAnimeComponent } from './components/detail-anime/detail-anime.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert/alert.component';
import { ModalAddToMyListComponent } from './components/modal-add-to-my-list/modal-add-to-my-list.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListePersoComponent } from './components/liste-perso/liste-perso.component';
import { UploadMangaComponent } from './components/upload-manga/upload-manga.component';
import { ListeMangaComponent } from './components/liste-manga/liste-manga.component';
import { DetailMangaAmateurComponent } from './components/detail-manga-amateur/detail-manga-amateur.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListeComponent,
    DetailAnimeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ModalAddToMyListComponent,
    ScheduleComponent,
    ListePersoComponent,
    UploadMangaComponent,
    ListeMangaComponent,
    DetailMangaAmateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

    // provider used to create fake backend
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

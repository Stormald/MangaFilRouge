import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAnimeComponent } from './components/detail-anime/detail-anime.component';
import { DetailMangaAmateurComponent } from './components/detail-manga-amateur/detail-manga-amateur.component';
import { HomeComponent } from './components/home/home.component';
import { ListeMangaComponent } from './components/liste-manga/liste-manga.component';
import { ListePersoComponent } from './components/liste-perso/liste-perso.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { UploadMangaComponent } from './components/upload-manga/upload-manga.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'anime', component: HomeComponent, pathMatch:'full'},
  {path:"animes/:id", component: DetailAnimeComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"schedule", component: ScheduleComponent},
  {path:"schedule", component: ScheduleComponent, pathMatch:'full'},
  {path:"liste-perso", component: ListePersoComponent},
  {path:"liste-manga", component: ListeMangaComponent},
  {path:"upload-manga", component: UploadMangaComponent},
  {path:"manga-amateur/:id", component: DetailMangaAmateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAnimeComponent } from './components/detail-anime/detail-anime.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'anime', component: HomeComponent, pathMatch:'full'},
  {path:"animes/:id", component: DetailAnimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

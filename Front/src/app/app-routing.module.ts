import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAnimeComponent } from './components/detail-anime/detail-anime.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'anime', component: HomeComponent, pathMatch:'full'},
  {path:"animes/:id", component: DetailAnimeComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"schedule", component: ScheduleComponent},
  {path:"schedule", component: ScheduleComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

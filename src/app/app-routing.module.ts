import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { MusicBookComponent } from './components/music-book/music-book.component';
import { PlayzoneComponent } from './components/playzone/playzone.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:AddMusicComponent},
  {path: 'book', component:MusicBookComponent},
  {path: 'playzone', component: PlayzoneComponent, canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

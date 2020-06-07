import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './_components/register/register.component';
import { HomeComponent } from './_components/home/home.component';
import { LeaderboardComponent } from './_components/leaderboard/leaderboard.component';

const routes: Routes = [
  { path: 'register',
     component:RegisterComponent
    },
    {
      path: 'home',
      component: HomeComponent,
      data: { state: 'isHome'}
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
    data: { state: 'isHome'}
},
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

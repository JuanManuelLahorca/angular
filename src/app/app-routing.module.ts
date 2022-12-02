import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoketeAboutComponent } from './sokete-about/sokete-about.component';
import { SoketeSocksComponent } from './sokete-socks/sokete-socks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'socks',
    pathMatch: 'full'
  },
  {
    path: 'socks',
    component: SoketeSocksComponent
  },
  {
    path: 'about',
    component: SoketeAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

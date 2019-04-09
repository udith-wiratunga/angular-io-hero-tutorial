import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ { path: 'heros', component: HerosComponent},
                         { path: 'dashboard', component: DashboardComponent}
                        ];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { 
  
  
}
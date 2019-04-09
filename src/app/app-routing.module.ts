import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [  { path:'',redirectTo:'./dashboard',pathMatch:'full'},
                          { path: 'heros', component: HerosComponent},
                          { path: 'dashboard', component: DashboardComponent},
                          { path: 'detail/:id', component:HeroDetailComponent}
                        ];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { 
  
  
}
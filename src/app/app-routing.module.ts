import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'cVitae', loadChildren: './c-vitae/c-vitae.module#CVitaePageModule' },
  { path: 'pWorks', loadChildren: './p-works/p-works.module#PWorksPageModule' },
  { path: 'hobbies', loadChildren: './hobbies/hobbies.module#HobbiesPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'techskills', loadChildren: './techskills/techskills.module#TechskillsPageModule' },
  { path: 'softskills', loadChildren: './softskills/softskills.module#SoftskillsPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

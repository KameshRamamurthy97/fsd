import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OurStoryComponent } from './our-story/our-story.component';

const routes: Routes = [
  {path: 'our-story', component: OurStoryComponent},
  {path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  {path: 'confirm',component: ConfirmComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ConfirmComponent];


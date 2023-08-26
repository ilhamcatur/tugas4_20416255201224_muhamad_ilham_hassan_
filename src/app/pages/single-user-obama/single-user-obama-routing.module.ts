import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleUserObamaPage } from './single-user-obama.page';

const routes: Routes = [
  {
    path: '',
    component: SingleUserObamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleUserObamaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleUserObamaPageRoutingModule } from './single-user-obama-routing.module';

import { SingleUserObamaPage } from './single-user-obama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleUserObamaPageRoutingModule
  ],
  declarations: [SingleUserObamaPage]
})
export class SingleUserObamaPageModule {}

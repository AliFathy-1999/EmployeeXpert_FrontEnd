import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectionService } from './service/direction.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [DirectionService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

  }
}

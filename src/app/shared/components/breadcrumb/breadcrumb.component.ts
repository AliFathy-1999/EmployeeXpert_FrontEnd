import { Component, Input } from '@angular/core';
import { FeatherIconsModule } from '../../feather-icons.module';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input()
  title!: string;
  @Input()
  items!: string[];
  @Input()
  active_item!: string;

  constructor() {
    //constructor
  }
}

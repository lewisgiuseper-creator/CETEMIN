import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-motor',
  imports: [IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, RouterLink],
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MOTORComponent {
  public listSelectedItem?: string;
  public listSelectedItem1?: string;
}

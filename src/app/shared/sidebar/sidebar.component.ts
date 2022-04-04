import { Component } from '@angular/core';
import { GiffyService } from '../../giffy/services/giffy.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private giffyService: GiffyService) {}

  get historial() {
    return this.giffyService.historial;
  }
}

import { Component } from '@angular/core';
import { GiffyService } from '../services/giffy.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [],
})
export class ResultsComponent {
  constructor(private giffyService: GiffyService) {}

  get resultados() {
    return this.giffyService.listGiffy;
  }
}

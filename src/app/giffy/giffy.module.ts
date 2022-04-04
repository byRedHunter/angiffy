import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiffyPageComponent } from './giffy-page/giffy-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [GiffyPageComponent, SearchComponent, ResultsComponent],
  imports: [CommonModule],
  exports: [GiffyPageComponent],
})
export class GiffyModule {}

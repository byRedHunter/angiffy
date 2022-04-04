import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiffyService } from '../services/giffy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  @ViewChild('textSearch') textSearch!: ElementRef<HTMLInputElement>;

  constructor(private giffySerice: GiffyService) {}

  search(): void {
    const valor = this.textSearch.nativeElement.value.trim().toLowerCase();

    if (valor === '') return;

    this.giffySerice.buscarGiffy(valor);
    this.textSearch.nativeElement.value = '';
  }
}

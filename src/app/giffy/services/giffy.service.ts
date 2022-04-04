import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GiffyService {
  private _apiKey: string = 'HOvJXSzfC52iUh9poPNTA7D9d0MbQGkN';
  private _historial: string[] = [];

  constructor(private http: HttpClient) {}

  get historial() {
    return [...this._historial];
  }

  buscarGiffy(query: string) {
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);

      this.searchInApi(query);
    }
  }

  searchInApi(query: string) {
    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${query}&limit=10`
      )
      .subscribe((resp) => {
        console.log('RESPONSE: ', resp);
      });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGiffyResponse, Giffy } from '../interface/giffy.interface';

@Injectable({
  providedIn: 'root',
})
export class GiffyService {
  private _uri: string = 'https://api.giphy.com/v1/gifs';
  private _apiKey: string = 'HOvJXSzfC52iUh9poPNTA7D9d0MbQGkN';
  private _historial: string[] = [];
  public listGiffy: Giffy[] = [];

  constructor(private http: HttpClient) {
    this.loadStorage();
  }

  get historial() {
    return [...this._historial];
  }

  buscarGiffy(query: string) {
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);
    }

    this.searchInApi(query);

    this.saveStorage();
  }

  searchInApi(query: string) {
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('q', query)
      .set('limit', '10');

    this.http
      .get<SearchGiffyResponse>(`${this._uri}/search`, {
        params,
      })
      .subscribe((resp) => {
        this.listGiffy = resp.data;
      });
  }

  saveStorage() {
    localStorage.setItem('historial', JSON.stringify(this._historial));
    localStorage.setItem('listGiffy', JSON.stringify(this.listGiffy));
  }

  loadStorage() {
    const infoStorage = localStorage.getItem('historial');
    const listGiffyStorage = localStorage.getItem('listGiffy');

    infoStorage && (this._historial = JSON.parse(infoStorage));
    listGiffyStorage && (this.listGiffy = JSON.parse(listGiffyStorage));
  }
}

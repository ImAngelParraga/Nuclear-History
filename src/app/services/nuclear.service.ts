import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NTJson } from '../shared/nt-object';

@Injectable({
  providedIn: 'root'
})
export class NuclearService {

  baseUrl = "https://tb-api.xyz/stream/get?s="

  constructor(private http: HttpClient) { }

  callNuclearApi(steamId: string, streamKey: string) {
    let apiUrl = this.baseUrl + `${steamId}&key=${streamKey}`
    return this.http.get<NTJson>(apiUrl).toPromise()
  }
}

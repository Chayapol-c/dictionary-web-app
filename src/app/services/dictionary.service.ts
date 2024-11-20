import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dictionary} from '../models/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient) { }

  getWordInfo(word: string): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>(this.baseUrl + word)
  }
}

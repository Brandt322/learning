import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JsonApis } from '../core/constants';
import { Posts } from '../shared/models/entities';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  url = environment.apiUrl;

  constructor(private httpclient: HttpClient) { }

  getPosts(): Observable<Posts[]> {
    return this.httpclient.get<Posts[]>(`${this.url}/${JsonApis.POSTS}`)
  }

  getComments(): Observable<any> {
    return this.httpclient.get(`${this.url}/${JsonApis.COMMENTS}`)
  }

}

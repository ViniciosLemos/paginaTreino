import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterResponse } from '../interfaces/newsletter.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpointUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  sendData(nome: string, email: string): Observable<NewsletterResponse> {
    const data = { nome, email };
    return this.http.post<NewsletterResponse>(this.endpointUrl, data);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HtmlViewModel } from 'src/app/ViewModels/htmlViewModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HtmlGenerationServiceService {
  private baseUrl = 'http://localhost:5730/api/Customer';
  constructor(private http:HttpClient) { }
 
  getWriterWithFavBooks(): Observable<any> {
    return this.http.get(this.baseUrl, {responseType: 'json'});
} 
}

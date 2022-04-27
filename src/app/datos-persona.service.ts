import { Injectable } from '@angular/core';
import {HttpClient, HttpContext} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonaService {

  constructor(private http: HttpClient) {}

 public getPersona(): Observable<any> {
    return this.http.get("http://localhost:8080/persona");

  }
}

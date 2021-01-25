import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) { }

  getPersons() : Observable<Person[]> {
    return this.http.get<Person[]>("http://localhost:8080/persons");
    // return new Observable(observer => {
    //   observer.next([...this.persons]);
    // });
  }
}

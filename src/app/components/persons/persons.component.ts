import { PersonsService } from './../../services/persons.service';
import { Person } from './../../services/person';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
// s = object of type PersonsService
// new PersonsComponent(s)
export class PersonsComponent implements OnInit {
  persons: Person[] = [];
  errorMessage = '';
  
  constructor(private myService: PersonsService) {
  }

  ngOnInit(): void {
    this.myService.getPersons() // Observable<Person[]>
        .subscribe(p => this.persons = p);
    /* 
      1. fetch("sdkjfbsd").then(response=>resonse.json()).then(data => this.persons = data)
      */
    // 2.    
    // this.http.get<Person[]>("http://localhost:8080/persons") /// Obsarvable  
    // .subscribe(
    //     {
    //       next: p => this.persons = p,
    //       error: err => this.errorMessage = "Something went wrong"
    //     });
    // 3 this.fetchPersons();

  }

  async fetchPersons() {
    // try {
    //   const res = await (this.http.get<Person[]>("http://localhost:8080/persons")
    //     .toPromise());
    //   this.persons = res;
    // } catch (err) {
    //   console.log(err);
    // }
  }
}



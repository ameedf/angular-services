import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  result: string = 'positive'; // negative / unknown ...
  //isValid: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.result = 'aaa', 10000);


  }

}

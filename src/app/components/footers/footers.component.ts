import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html',
  styleUrls: ['./footers.component.scss']
})
export class FootersComponent implements OnInit {
today = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <app-page-header
      style="font-size: 30px"
      class="text-center"
      title="page not found - 404"
      icon="bi bi-shield-fill-exclamation"
      description="the page you are looking for is not found - Error 404"

    ></app-page-header>
  `,
  styles: [],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

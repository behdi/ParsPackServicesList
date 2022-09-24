import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-services-page',
  templateUrl: './my-services-page.component.html',
  styleUrls: ['./my-services-page.component.less'],
})
export class MyServicesPageComponent {
  searchBar = new FormControl<string | null>(null);

  constructor() {}
}

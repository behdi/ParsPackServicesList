import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less'],
})
export class SearchBarComponent {
  @Input() searchBarCtrl!: FormControl;
  @Input() placeholderTxt = 'سرویس مورد نظر خود را جستجو کنید...';

  constructor() {}
}

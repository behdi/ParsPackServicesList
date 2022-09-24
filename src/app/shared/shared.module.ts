import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    NzIconModule,
  ],
  exports: [SearchBarComponent],
})
export class SharedModule {}

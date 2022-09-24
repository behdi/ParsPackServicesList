import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ShamsiDatePipe } from './pipes/shamsi-date.pipe';

@NgModule({
  declarations: [SearchBarComponent, ShamsiDatePipe],
  imports: [
    CommonModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    NzIconModule,
  ],
  exports: [SearchBarComponent, ShamsiDatePipe],
})
export class SharedModule {}

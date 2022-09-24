import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shamsiDate',
})
export class ShamsiDatePipe implements PipeTransform {
  /**
   * Generally, a date pipe needs to take many more inputs
   * and be more configurable. But since this is a test
   * project, we'll leave it at this basic implementation.
   *
   * @param {(string | number)} value: A datetime-like string
   * @returns {string}: Shamsi date string in YY/MM/DD format
   */
  transform(value: string | number): string {
    return this.transformToShamsi(value);
  }

  private transformToShamsi(value: string | number) {
    return new Date(value)
      .toLocaleString('fa-IR', {
        year: '2-digit',
        month: 'numeric',
        day: '2-digit',
        timeZone: 'Asia/Tehran',
      })
      .replace('،', ' -');
  }
}

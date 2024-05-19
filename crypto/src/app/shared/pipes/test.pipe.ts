import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from '../models/DateTime'

@Pipe({
  name: 'test',
  standalone: true,
})
export class TestPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    let time = value
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let dateTime: DateTime = {Day: days[time.getDay()], Time: {Hours: time.getHours(), Minutes: time.getMinutes(), Seconds: time.getSeconds()}}
    //let test = value.Day + '-' + value.Time.Hours + ':' + value.Time.Minutes + ':' + value.Time.Seconds
    return dateTime.Day + '-' + dateTime.Time.Hours + ':' + dateTime.Time.Minutes + ':' + dateTime.Time.Seconds + '  UTC'
  }

}

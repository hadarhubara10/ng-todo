import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit, OnDestroy {
  @Input() set dDay(dDay: Date) {
    this._dDay = dDay;
    this.dateNow = new Date();
  }
  private subscription: Subscription = new Subscription();
  private _dDay: Date;
  private dateNow: Date = new Date();
  private millisecondsInSecond: number = 1000;
  private secondsInMinutes: number = 60;
  private minutesInHour: number = 60;
  private hoursInDay: number = 24;

  public timeDiff: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;

  private getTimeDiff(): void {
    this.timeDiff = new Date(this._dDay).getTime() - new Date().getTime();
    this.setTimeUnits(this.timeDiff);
  }

  private setTimeUnits(timeDiff: number): void {
    this.seconds = Math.floor(
      (timeDiff / this.millisecondsInSecond) % this.secondsInMinutes
    );
    this.minutes = Math.floor(
      (timeDiff / (this.millisecondsInSecond * this.minutesInHour)) %
        this.minutesInHour
    );
    this.hours = Math.floor(
      (timeDiff /
        (this.millisecondsInSecond *
          this.minutesInHour *
          this.secondsInMinutes)) %
        this.hoursInDay
    );
    this.hours = Math.floor(
      timeDiff /
        (this.millisecondsInSecond *
          this.minutesInHour *
          this.secondsInMinutes *
          this.hoursInDay)
    );
  }

  constructor() {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(
      interval(1000).subscribe(() => {
        this.getTimeDiff();
      })
    );
  }
}

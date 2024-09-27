import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

  @Input() info: any;

  currentDate: any;
  dayOfWeek: any;
  month: any;

  constructor() { }
  public ngOnInit(): void {
    this.currentDate = new Date();
    this.dayOfWeek = this.currentDate.toLocaleDateString('es-ES', { weekday: 'long' });
    this.month = this.currentDate.toLocaleDateString('es-ES', { month: 'long' });
  }

}

import { Component } from '@angular/core';
import { InfoComponent } from '../../../../shared/info/info.component';
import { info } from '../../core/models/info';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [InfoComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  public info: any = info;

}

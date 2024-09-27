import { Component } from '@angular/core';
import { MaterialComponentsModule } from '../../../../shared/material/material-components.module';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MaterialComponentsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {

}

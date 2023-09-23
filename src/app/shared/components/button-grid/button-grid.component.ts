import { Component, Input } from '@angular/core';
import { Button } from '@models/button.model';

@Component({
  selector: 'app-button-grid',
  templateUrl: './button-grid.component.html',
  styleUrls: ['./button-grid.component.css']
})
export class ButtonGridComponent {
  @Input() button: Button = { link: '', label: '', section: undefined };
}

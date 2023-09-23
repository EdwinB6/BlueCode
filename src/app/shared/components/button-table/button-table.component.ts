import { Component, Input } from '@angular/core';
import { Button } from '@models/button.model';

@Component({
  selector: 'app-button-table',
  templateUrl: './button-table.component.html',
  styleUrls: ['./button-table.component.css']
})
export class ButtonTableComponent {
  @Input() button: Button = { link: '', label: '', section: undefined };
}

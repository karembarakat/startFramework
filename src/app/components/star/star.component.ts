import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.component.html',
  styles: ``
})
export class StarComponent {
  @Input() color: string = '#fff';
}

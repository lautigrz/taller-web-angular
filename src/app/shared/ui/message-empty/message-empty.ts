import { Component, input } from '@angular/core';

@Component({
  selector: 'app-message-empty',
  imports: [],
  templateUrl: './message-empty.html',
  styleUrl: './message-empty.css'
})
export class MessageEmpty {
  mensage = input<string>('');
  icon = input<string>('');
}
